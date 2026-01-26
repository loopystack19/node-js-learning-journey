//lets do the routing thing
const fs=require('fs');
const path=require('path');
const http=require('http');

const htmlFile=path.join(__dirname,'Home', 'index.html');
let htmlFileData=fs.readFileSync(htmlFile,'utf8');
const server=http.createServer((request, response)=>{
    const url = request.url;
    if(url === '/' || url === '/home'){
        response.writeHead(200,
            {
                "Content-Type":"text/html",
                "My-Header":"Hello"
            }
        )
        response.end(htmlFileData.replace('Hello world ','This is the Home Page'));
    }
    else if(url === '/about'){
        response.writeHead(200);
        response.end(htmlFileData.replace('Hello world ','This is the About Page'));
    }
    else if(url === '/contact'){
        response.writeHead(200);
        response.end(htmlFileData.replace('Hello world ','This is the Contact Page'));
    }
    else if(url === '/services'){
        response.writeHead(200);
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
//setting a response headers
//Content-Type-This is indicates the type of media included in the body of the response
//Content-Length-Specifies the size of the response body in bytes
//Cache-Control-Provides directives for caching mechanisms, determining how and for how long the response should be cached by the client
//Date-The date and the time when the message was generated
