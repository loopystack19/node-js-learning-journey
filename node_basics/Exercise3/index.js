// inorder to read the contents of a folder you need to use readdir
//this returns an array response

const fsPromises=require('fs').promises;
const { existsSync } = require('fs');
const path=require('path');

const runWorkFlow= async ()=>{
    try{

        const newFolder=path.join(__dirname,'new_folder');
        const file1= path.join(newFolder, 'file_1.txt');
        const file2=path.join(newFolder,'file_2.txt');
        const file3=path.join(newFolder, 'file_3.txt');

        if(!existsSync(newFolder)){
            fsPromises.mkdir(newFolder);
            console.log("A new folder has been succefully implemented ✅");
        }

        await fsPromises.writeFile(file1, "Hello, this is file 1");
        console.log("writting on file 1:succeful ✅");

        await fsPromises.writeFile(file2, "Hello, this is file 2");
        console.log("writting on file 2:succeful ✅");

        await fsPromises.writeFile(file3, "Hello, this is file 3");
        console.log("writting on file 3:succeful ✅");


        const files=await fsPromises.readdir(newFolder);
        console.log(files);



    }
    catch(err){
        console.error(err);
    }
}
runWorkFlow();
