//lets create a server and send a html response
const fs=require('fs');
const http=require('http');
const path=require('path');

const fileRead=path.join(__dirname,'templates', 'index.html');
const data=fs.readFileSync(fileRead,'utf8');
const server=http.createServer((req, res)=>{
    res.end(data);
    console.log("A new Request has been received");
})
const port=3000;
server.listen(port,()=>{
    console.log("The server is running on",port);
})