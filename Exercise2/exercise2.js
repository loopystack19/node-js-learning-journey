//Challenge 2: The Data Filter
//The Goal: Read a file, process the text inside it using standard JavaScript, and save the result.
//The Steps:
//Preparation: Manually (or via code) create a file named numbers.txt containing: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
//Read: Read the file using fsPromises.
//Process: * The data comes in as a string. Use .split(',') to turn it into an array.
//Convert those strings into actual numbers.
//Use .filter() to keep only the even numbers.
//Write: Join the even numbers back into a string (separated by commas) and write them to a new file called evens.txt.

const fsPromises=require('fs').promises;
const { existsSync } = require('fs');
const path=require('path');

const workFlowRun= async ()=>{
   try{
    const newFolder=path.join(__dirname,'test_folder');
    const filePath=path.join(newFolder, 'numbers.txt');

    if(!existsSync(newFolder)){
        fsPromises.mkdir(newFolder);
        console.log("Succefully created the test_folder ✅");
    }
  await fsPromises.writeFile(path.join(__dirname,'test_folder', 'numbers.txt'),"12345678910");
  const data= await fsPromises.readFile(filePath,'utf8');
  
  let arrayData=data.split(",").map(num=>{
    Number(num)
  }).filter(num=>{
    return num % 2 === 0;
  });
  let evenStrings=evenNumbers.join(",");

  await fsPromises.writeFile(path.join(__dirname,'test_folder','even.txt'),evenStrings);
  console.log("Succefully created and wrote on the even.txt file");

  console.log(evenNumbers);


   }
   catch(error){
    console.log(error);
   }
}

workFlowRun()