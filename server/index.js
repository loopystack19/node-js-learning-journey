//lets create a server and send a html response
const fs=require('fs');
const http=require('http');
const path=require('path');

const fileRead=path.join(__dirname,'templates', 'index.html');
const data=fs.readFileSync(fileRead,'utf8');
const server=http.createServer((req, res)=>{
    const url=req.url;
    if(url === '/'){
        res.end(data);
    }
    else if( url === '/about'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("This is the about section of the node app");
    }
    else if( url === '/contact'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("This is the contact section of the node app");
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Sorry we could not locate the page");
    }
})
const port=3000;
server.listen(port,()=>{
    console.log("The server is running on",port);
})
//learning the basics of routing