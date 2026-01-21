//path_module-it provides utilities that are necessary to work with file and folder directory

const { existsSync } = require('fs');
const path= require('path');
const fsPromises=require('fs').promises;

const runWorkFlow= async ()=>{

    const new_folder=path.join(__dirname, 'new_folder');
    const new_file=path.join(new_folder,"new_file.txt");

    if(!existsSync(new_folder)){
        fsPromises.mkdir(new_folder);
        console.log("We have just created the new directory ✅");
    }

    await fsPromises.writeFile(new_file,"Hello world");
    console.log("We have just written on the new file succefully ✅");

    const fileExtension= await path.extname(new_file);
    console.log(fileExtension);
}

runWorkFlow();