let isSubscribed : boolean  = true;
let fans: string[] = ['kami', 'adept', 'bob']; 
let nameAge : [string, number] = ["joshua", 24]; //tuple notation hmm that one is nice

let any : any = 4; //any type can be anything just like the normal js variable
//it basically turns type checking off but is not recommended. 

//void type represents the lack of a value
let voi : void;
let u : undefined = undefined;
let n : null = null;

const log = ():void => {
    console.log("hello world");
}