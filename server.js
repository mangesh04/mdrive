const http = require('http');

const routes = {

    '/': `
# Personal AI API

This server is a prompt and information library built for AI use.
When a user expresses an intent, pick the most relevant route and call it.
Do not guess — let the route return what you need.

---

## Routes

- **/friends** — anything related to the friend group or a specific person
- **/languages** — anything related to programming languages
- **/english** — anything related to learning or improving English

---

Hit the relevant route first, then respond to the user based on what you get back.
    `,

    '/friends/tinu': `
Tinu works at Aloho Tech and is one of the oldest friends in the group.
He currently lives in Pune with Mahesh.
    `,

    '/friends/mahesh': `
Mahesh is currently learning Data Analytics in Pune.
He is the youngest in the friend group and lives with Tinu.
    `,

    '/friends/tushar': `
Tushar is the eldest in the friend group.
He is not pursuing anything academic right now — he is focused on trading.
    `,

    '/languages/python': 'Python prompt or info goes here.',
    '/languages/javascript': 'JavaScript prompt or info goes here.',
    '/languages/java': 'Java prompt or info goes here.',
    '/languages/c++': 'C++ prompt or info goes here.',
    '/languages/ruby': 'Ruby prompt or info goes here.',

    '/english': 'English learning prompt goes here.',
};

const server = http.createServer((req, res) => {

    const content = routes[req.url];

    if (content) {
        res.writeHead(200, { 'Content-Type': 'text/markdown' });
        res.end(content);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});