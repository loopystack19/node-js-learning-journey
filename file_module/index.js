const fs= require('fs');
const path=require('path');

const dataFolder=path.join(__dirname,'data_folder');

if(!fs.existsSync(dataFolder)){
    fs.mkdir(dataFolder);
    console.log("Created the data folder succefully ✅");
}

const filePath=path.join(dataFolder,'new_file');

fs.writeFileSync(filePath,"Hello from node js");
console.log("We have sucefully written on the file ✅");

fs.readFileSync(filePath,'utf8', (err, data)=>{
    if(err){
        throw new Error("We encountered an error while trying to read the file");
    }else{
        console.log("Data",data);
    }
});

fs.appendFileSync(filePath,"\n This is an append line we trying on the file");
console.log("We have sucefully appended to the file");

