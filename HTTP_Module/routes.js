//createServer function takes in a call back with two vital objects as the parameters
//req, res, request contains all the information about the person visiting the port
//res-> anything you put here is what the client sees on their browser
//{Content-Type}->This tells the browser what type of content it will be receiving
//res.end()->this closes the connection and sends the final message
const http=require('http');
const server=http.createServer((req, res)=>{
    const url=req.url;
    if(url === '/'){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("This is my HomePage");
    }
    else if(url === '/about'){
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end("This is my about page");
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("OOOPS! page not found");
    }
})
const port=3000;

server.listen(port, ()=>{
    console.log("The server is succefully running at port 3000 ✅"); 
})