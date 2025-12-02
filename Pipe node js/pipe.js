const fs = require('fs');
const http = require('http');


const server = http.createServer((req,res)=>{
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});

server.listen(3000, ()=>{
    console.log("server is runing on port 3000")
});