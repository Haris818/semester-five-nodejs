const http = require('http');

const serever = http.createServer((req, res)=>{
    if (req.url === "/"){
        res.setHeader("Content-type","text/html");
        res.write("<h1>HELLO HARIS MEMON</h1>");
        res.end();
    }

    else if (req.url === "/about"){
        res.write("About Haris Memon");
        res.end();
    }

    if (req.url === "/contact"){
        res.setHeader("Content-type","text/plain");
        res.write("Contact Haris Memon");
        res.end();
    }
});


//server port set 

server.listen(3000, () => {
   console.log('server is runing on port 3000');
});