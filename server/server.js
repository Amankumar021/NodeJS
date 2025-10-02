const http = require('http');
const fs = require('fs');
const path = require('path');


const Port = 3000;

const server = http.createServer((req,res)=>{
    const filepath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

    console.log(filepath);

    const extname = String(path.extname(filepath)).toLowerCase();

    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
    }

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filepath, (err, content)=>{
        if(err){
            if(err.code == "ENOENT"){
                res.writeHead(404, {'content-type':'text/html'});
                res.end("<h1>404 : file Not Found</h1>");
            }
        }else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    });
});



server.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);
});