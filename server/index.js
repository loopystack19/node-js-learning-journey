//lets do the routing thing
const fs=require('fs');
const path=require('path');
const http=require('http');

const htmlFile=path.join(__dirname,'Home', 'index.html');
let htmlFileData=fs.readFileSync(htmlFile,'utf8');
const server=http.createServer((request, response)=>{
    const url = request.url;
    if(url === '/'){
        response.end(htmlFileData.replace('Hello world ','This is the Home Page'));
    }
    else if(url === '/about'){
        response.end(htmlFileData.replace('Hello world ','This is the About Page'));
    }
    else if(url === '/contact'){
        response.end(htmlFileData.replace('Hello world ','This is the Contact Page'));
    }
    else if(url === '/services'){
        response.end(htmlFileData.replace('Hello world ','This is the Services Page'))
    }
    else{
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.end("Error 404:We could not locate the page")
    }
});

const port=3000;

server.listen(port,()=>{
    console.log("The server is running at port:", port);
});
//the html document is rendering perfectly and the routing is working perfectly