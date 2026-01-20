//Challenge 3: The "Media Organizer" (Your Turn!)
//Now that you know how to get the list of files, try to combine it with path.extname() to build the organizer.
//The Goal:
//Read the downloads folder.
//Loop through the array of files.
//If path.extname(file) === '.pdf', delete it using fsPromises.unlink().
//If path.extname(file) === '.jpg', rename it using fsPromises.rename() to add organized- to the front of the name.
//One Small Tip: When you use unlink or rename, remember that the file variable is just the name (e.g., "vacation.jpg"). 
// You need to use path.join(folderPath, file) to give Node the full path, otherwise it won't know where the file is!

const fsPromises=require('fs').promises;
const { existsSync } = require('fs');
const path=require('path');

const runWorkFlow= async () =>{

    try{
        const downloadFolder=path.join(__dirname, 'download_folder');
    const file1=path.join(downloadFolder,'text_1.txt');
    const file2=path.join(downloadFolder,'text_2.pdf');
    const file3=path.join(downloadFolder,'image_1.jpg');

    if(!existsSync(downloadFolder)){
        fsPromises.mkdir(downloadFolder);
        console.log("We have succefully created the download folder ✅");
    }

    await fsPromises.writeFile(file1,"Hello this is file 1");
    await fsPromises.writeFile(file2,"Hello pdf");
    await fsPromises.writeFile(file3,"Image");

    const availableFiles= await fsPromises.readdir(downloadFolder);

    for(let availableFile of availableFiles){

        //providing the path to each file

        const fullPath=path.join(downloadFolder, availableFile);

       //getting the extension on each file

       let extension=path.extname(availableFile);

       if(extension === '.pdf'){
        await fsPromises.unlink(fullPath)
        console.log(`succefully deleted :${availableFile}`)
       }else if (extension === ".jpg"){

        let stringName=`Organized-${availableFile}`

        let newPath=path.join(downloadFolder, stringName);

        await fsPromises.rename(fullPath, newPath);

        console.log("Succefully renamed the file ✅")

       }
    }
    const finalFiles= await fsPromises.readdir(downloadFolder);
    console.log(finalFiles);
    }

    catch(err){
        console.error(err);
    }

    

}

runWorkFlow();