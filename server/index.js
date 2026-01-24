//here am going to try and send different html resources based on the routes
const fs= require('fs');
const path=require('path');
const http=require('http');
//These are the paths to the resources that we need
let homePage=path.join(__dirname,'Home','index.html');
let aboutPage=path.join(__dirname,'About','index.html');
let contactPage=path.join(__dirname,'Contact','index.html');

//lets read from the resources
let homePageRead=fs.readFileSync(homePage,'utf8');
let aboutPageRead=fs.readFileSync(aboutPage,'utf8');
let contactPageRead=fs.readFileSync(contactPage,'utf8');


//lets create the server that we need
const server=http.createServer((request, response)=>{
    //here am going to implement the routing logic
    const url=request.url;
    if(url === '/'){
        response.end(homePageRead);
    }
    else if(url === '/about'){
        response.end(aboutPageRead);
    }
    else if(url === '/contact'){
        response.end(contactPageRead);
    }
    else{
        response.writeHead(404,{"Content-Type":"text/plain"})
        response.end("Error 404:Page not found");
    }
})
const port=3000;
server.listen(port,()=>{
    console.log("The server is running at port", port);
})