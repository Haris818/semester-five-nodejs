const http = require('http');
const fs = require('fs');

//create an http server 

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // res.setheader('Content-type', "text/html");
        res.write("<h1>HELLO HARIS MEMON</h1>");
        res.end();
    }

    else if (res.url === "/about") {
        res.write("About HARIS MEMON");
        res.end();
    }

    else if (req.url === "/weatherapi") {
        fs.readFile(`${__dirname}/jsonData/weatherAPI.json`, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plan" });
                res.end("INTERNAL SERVER ERROR");
            }

            else {
                res.writeHead(200, { "Content-Type": "text/plan" });
                res.end(data);
            }
        });
    }

    else if (req.url === "/contact") {
        res.write("CONTACT HARIS MEMON");
        res.end();
    }
});

//set server port 

server.listen(3000, () => {
    console.log('server is runing is port 3000');
});

