//Creating a script for a file

// const path= require('path');

// const challengejs=path.join(__dirname,'projects','node_basics','challenge.js');

// console.log(`Absolute path for the file:`, challengejs);

//2.Challenge 2
// The Task:
// Check/Create Folder: If a folder named logs doesn't exist, create it.
// Create File: Inside logs, create a file called update.txt containing the string "Initial Log".
// Add Data: Append the string "\nSecond Entry" to that same file (the \n makes sure it starts on a new line).
// Read & Verify: Read the file and log the result to your console.

// const fsPromises=require('fs').promises;
// const path=require('path');
// const {existsSync}=require('fs');

// const runWorkFlow= async ()=>{

//     try{
//         const logs=path.join(__dirname,'logs');
//     const updateTxt=path.join(logs,'update.txt');

//     if(!existsSync(logs)){
//          await fsPromises.mkdir(logs);
//         console.log("We have succefully created the logs folder ✅");
//     }
//     await fsPromises.writeFile(updateTxt,"Initial log");
//     console.log("We have succefully written on update.txt ✅");

//     await fsPromises.appendFile(updateTxt,"\n Make sure it starts on a new line");
//     console.log("We have succefully appended to the file ✅");

//     const data= await fsPromises.readFile(updateTxt,'utf8');
//     console.log(data);

// }
// catch(error){
//     console.log(error);
// }
// } 
// runWorkFlow();

//Challenge 3:-Creating a server and a running it on my local my machine
// Create the server on Port 5000.
// Route / to a Welcome message.
// Route /api to a JSON message.
// Handle everything else with a 404.

const http= require('http');
const server= http.createServer((req, res)=>{
    const url =req.url;
    if(url === '/'){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Welcome, this is the homePage");
    }
    else if(url ==='/api'){
        res.writeHead(200,{"Content-Type":"application/json"});
        const data={
            message:"This is a json file",
            timeStamp:Date.now()
        }
        res.end(JSON.stringify(data));
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("page not found");
    }
});
const port = 5000;
server.listen(port,()=>{
    console.log("The server is running at port:", port);
})

