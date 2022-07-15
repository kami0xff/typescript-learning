//in js we have primitive types and reference types
//string number undefined null true false are primitive 
//arrays and objects are reference types 
//in js variables do not have types VALUES have types !!
//

namespace Kami{
class Cache {
    id: number;
    constructor(){
        this.id = 1;
    }
}

interface IPrint{
    print():void;
}

type MyObj = {
    text: string,
    num:number,
    arr:number[],
}
interface MyInterface {
    text:string,
    num:number,
    arr:number[]
}

const obj: MyObj = {
    text : "mutable string",
    num  : 10,
    arr  : [1,2,3,4,5,6,7,8,9]
}

const func = (obj : {text : string, num: number}) => {
    obj.text = "mutated text";
    obj.num = 20;
    
}

const func2 = (obj : MyObj) => {
    obj.text = "mutated text func2";
    obj.num = 30;
    obj.arr.reverse()
    console.log(obj)
}

const func3 = (obj : MyInterface) => {
    obj.text = "mutated text func3";
    obj.num = 40;
}


console.log(obj)
func2(obj);
console.log(obj) //indeed its a reference type it modified the original 



//the 3 reference types of JS or TS are Arrays Functions and Objects
//the rest is all value types 

//Javascript has 5 data types that are passed by value:
//Boolean, null, undefined, String, and Number. We’ll call these primitive types.













// let canvas = document.getElementById("canvas");
// let context = canvas
// console.log("test");


}