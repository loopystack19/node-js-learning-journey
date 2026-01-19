//lets read from a file

const fs=require('fs');

const path=require('path');

// fs.readFile('./files/lorem.txt', 'utf8', (err, data)=>{
//     if(err){
//         throw new Error(`An uncaught exception was encountered ${err}`);
//     }else{
//         console.log(data);
//     }
// })

//There is a better way to write the above code 

fs.readFile(path.join(__dirname,'files', 'lorem.txt'), 'utf8', (err, data)=>{
    if(err){
        throw new Error("An uncaught exception was encountered");
    }
    else{
        console.log(data);
    }
})

//Here is the syntax for the .join()

//variable.join(__dirname, folderName, fileName)=>it will glue this strings into one arguement that forms the relative path to the file, irregardless of the operating system



//We going to catch any errors that occur

process.on('uncaughtException', err=>{
    console.error(`An uncaught exception was encountered ${err}`);
    process.exit(1);
});

//now we are going to write on a file

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'),'Nice to meet you, nodejs looks cool', err=>{
    if(err){
        throw new Error("An error was uncountered when trying to write on the file")
    }
    else{
        console.log("Write complete ✅");
    }
})

process.on('uncaughtException', err=>{
    console.error(error);
    process.exit(1);
})

//lets append some text to a file

fs.appendFile(path.join(__dirname,'files','reply.txt'), 'Testing the append function in node js 😂', err=>{
    if(err){
        throw new Error("An error was encountered when appending test to the file")
    }else{
        console.log("Append complete");
    }
})

process.on('uncaughtException', err=>{
    console.error(err)
})

//when writing, reading and appending files, is required in a excat format, you need to pass the operations in form of callbacks and this can be frustrating
//here is the best way to do it

const fsPromises=require('fs').promises;

const path2=require('path');

const fileOps=async ()=>{
    try{

        const data= await fsPromises.readFile(path2.join(__dirname, 'files', 'lorem.txt'), 'utf8')
        console.log(data);
        await fsPromises.writeFile(path2.join(__dirname,'files', 'lorem.txt'),'/n/n/n Hello we are writing on this file using async and await')

    }
    catch(error){
        console.error(error);
    }
}

fileOps()