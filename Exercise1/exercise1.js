//Challenge 1: The "Sequential" Logger
//Goal: Prove you can control the order of events in an asynchronous environment.
//Write a script that:
//Creates a folder named test_folder.
//After the folder is created, create a file inside it called hello.txt containing "Phase 1".
//After that file is written, append "Phase 2" to it.
//After the append is finished, rename the file to finished.txt.
//The Catch: You must use the callback versions (e.g., fs.mkdir, fs.writeFile), not the Sync versions.
// You’ll experience what developers call "Callback Hell."

// const fs=require('fs');
// const path=require('path');

// const folder=path.join(__dirname,'test_folder');
const file=path.join(folder, 'hello.txt');
const newFile=path.join(folder, 'finished.txt');

fs.mkdir(folder, err=>{
    if(err){
        throw new Error("An error was encountered when creating the test_folder");
    }else{
        console.log("test_folder was succefully created ✅")
    }
    fs.writeFile(file,"Phase 1", (err)=>{
        if(err){
            throw new Error("We encountered and error while trying to write to the file");
        }else{
            console.log("Succefully wrote to the file ✅");
        }

        fs.appendFile(file,"Phase 2", (err)=>{
            if(err){
                throw new Error("We encountered and error while trying to write to the file");
            }else{
                console.log("Succefully wrote to the file ✅");
            }
            
            fs.rename(file, newFile, (err)=>{
                if(err){
                    throw new Error("We encountered and error while trying to write to the file");
                }else{
                    console.log("Succefully wrote to the file ✅");
                }

                fs.readFile(newFile, 'utf8', (err, data)=>{
                    if(err){
                       throw new Error("we are unable to read the file");
                    }else{
                        console.log(data);
                    }
                })
            })
        })
    })
})

process.on('uncaughtException', err=>{
    console.log(err);
    process.exit(1);
})

//Now implementing the soluton to the same problem using async and await

const fsPromises=require('fs').promises;
const { existsSync } = require('fs');
const path=require('path');

const runWorkFlow= async ()=>{
    try{

        const folderPath=path.join(__dirname,'test_folder');
        const filePath=path.join(folderPath, 'hello.txt');
        const newFilePath=path.join(folderPath, 'finished.txt');

        //checking and creating the folder

        if(!existsSync(folderPath)){
            fsPromises.mkdir(folderPath);
            console.log("Succefully created the test_folder ✅");
        }

        await fsPromises.writeFile(filePath,"Phase 1");
        console.log("1.The file has succefully been written ✅");

        await fsPromises.appendFile(filePath,"/nPhase 2");
        console.log("2.File has been succefully appended ✅");

        await fsPromises.rename(filePath, newFilePath);
        console.log("The file has been succefully renamed");

        const finalData= await fsPromises.readFile(newFilePath, 'utf8');
        console.log(finalData);

    }
    catch(err){
        console.log(err)
    }
}

runWorkFlow();