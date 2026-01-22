//We going to learn about event Emitters
//Think of an eventEmitter like a radio station:
//.on()-this is like the listener, you are turning your radio to a specific station.
//      (the event name) and deciding what to do
//.emit()-This is like a broadcaster, you are shouting out a single to everyone who is currently tuned in

const EventEmitter= require('events');
const myFirstEmitter= new EventEmitter();
myFirstEmitter.on('greet',(name)=>{
    console.log(`Hello my name is ${name}`);
})

myFirstEmitter.emit("greet","Gemini");