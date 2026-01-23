//creating a simple server
const http=require('http');
const server=http.createServer((request, response)=>{
    console.log("We have just received a new request")
});
const port=3000;
server.listen(port,()=>{
    console.log("The server is running");
})
// this is a dummy commit to ensure that the streak on github continues