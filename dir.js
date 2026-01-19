const fs=require('fs');

if(!fs.existsSync('./new')){
    fs.mkdir('./new', (err)=>{
        if(err){
            throw new Error("We encounred an error when creating the new directory");
        }
        else{
            console.log("Directory created succefully ✅")
        }
    })
}

process.on('uncaughtException', err=>{
    console.error(err);
    process.exit(1);
})

//code that deletes the new directory

if(fs.existsSync('./new')){
    fs.rmdir('./new', (err)=>{
        if(err){
            throw new Error("We encounred an error when creating the new directory");
            console.log("Directory was succefully removed")
        }
    })
}