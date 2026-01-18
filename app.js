//first we start by importing the fs common core module

const fs=require('fs');

fs.readFile('./files/starter.txt', (err, data)=>{
    if (err) throw new Error;
    console.log(data.toString());
});

//Catching an error

process.on('uncaughtException', err=>{
    console.error(`There was an uncaught exception ${err}`)
});