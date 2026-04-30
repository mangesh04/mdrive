const http = require('http');


proLangs = ['python', 'javascript', 'java', 'c++', 'ruby'];

friends = ['tushar', 'tinu', 'mahesh']

const server = http.createServer((req, res) => {

    if (proLangs.some(lang => req.url.includes(lang))) {

        res.body = 'proLang found';
    }
    console.log(friends.some(friend => req.url.includes(friend)));

    if (friends.some(friend => req.url.includes(friend))) {

        res.body = 'friend found';
    }

    console.log(req.method, req.url);

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end(res.body || 'No match found');

});

server.listen(3000, () => {
    console.log('Server is running');
});