const http = require('http');

const pages = {

    '/': {
        title: 'Personal AI API',
        body: `
            <h1>Personal AI API</h1>
            <p>This server is a prompt and information library built for AI use.
            When a user expresses an intent, follow the most relevant link below.
            Let each page guide you deeper — do not guess.</p>
            <ul>
                <li><a href="/friends">Friends</a> — anything related to the friend group or a specific person</li>
                <li><a href="/languages">Languages</a> — anything related to programming languages</li>
                <li><a href="/english">English</a> — anything related to learning or improving English</li>
            </ul>
        `
    },

    '/friends': {
        title: 'Friends',
        body: `
            <h1>Friends</h1>
            <p>A close friend group based in India. Navigate to a specific person to learn more about them.</p>
            <ul>
                <li><a href="/friends/tinu">Tinu</a></li>
                <li><a href="/friends/mahesh">Mahesh</a></li>
                <li><a href="/friends/tushar">Tushar</a></li>
            </ul>
        `
    },

    '/friends/tinu': {
        title: 'Tinu',
        body: `
            <h1>Tinu</h1>
            <p>Tinu works at Aloho Tech and is one of the oldest friends in the group.
            He currently lives in Pune with Mahesh.</p>
            <a href="/friends">← Back to Friends</a>
        `
    },

    '/friends/mahesh': {
        title: 'Mahesh',
        body: `
            <h1>Mahesh</h1>
            <p>Mahesh is currently learning Data Analytics in Pune.
            He is the youngest in the friend group and lives with Tinu.</p>
            <a href="/friends">← Back to Friends</a>
        `
    },

    '/friends/tushar': {
        title: 'Tushar',
        body: `
            <h1>Tushar</h1>
            <p>Tushar is the eldest in the friend group.
            He is not pursuing anything academic right now — he is focused on trading.</p>
            <a href="/friends">← Back to Friends</a>
        `
    },

    '/languages': {
        title: 'Programming Languages',
        body: `
            <h1>Programming Languages</h1>
            <p>Each link below leads to a prompt or resource for that language.
            Use this when the user wants to learn or work with a specific language.</p>
            <ul>
                <li><a href="/languages/python">Python</a></li>
                <li><a href="/languages/javascript">JavaScript</a></li>
                <li><a href="/languages/java">Java</a></li>
                <li><a href="/languages/c++">C++</a></li>
                <li><a href="/languages/ruby">Ruby</a></li>
            </ul>
        `
    },

    '/languages/python':     { title: 'Python',      body: '<h1>Python</h1><p>Python prompt goes here.</p><a href="/languages">← Back to Languages</a>' },
    '/languages/javascript': { title: 'JavaScript',  body: '<h1>JavaScript</h1><p>JavaScript prompt goes here.</p><a href="/languages">← Back to Languages</a>' },
    '/languages/java':       { title: 'Java',        body: '<h1>Java</h1><p>Java prompt goes here.</p><a href="/languages">← Back to Languages</a>' },
    '/languages/c++':        { title: 'C++',         body: '<h1>C++</h1><p>C++ prompt goes here.</p><a href="/languages">← Back to Languages</a>' },
    '/languages/ruby':       { title: 'Ruby',        body: '<h1>Ruby</h1><p>Ruby prompt goes here.</p><a href="/languages">← Back to Languages</a>' },

    '/english': {
        title: 'English',
        body: `
            <h1>English</h1>
            <p>Use this when the user wants to improve their English —
            grammar, vocabulary, sentence structure, or general communication.</p>
            <a href="/">← Back to Home</a>
        `
    },
};

const html = (title, body) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
</head>
<body>
    ${body}
</body>
</html>
`;

const server = http.createServer((req, res) => {

    const page = pages[req.url];

    if (page) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html(page.title, page.body));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(html('Not Found', '<h1>404 — Route not found</h1><a href="/">← Back to Home</a>'));
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});