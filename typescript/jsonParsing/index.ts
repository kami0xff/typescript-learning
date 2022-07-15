
let jsonString : string = `{
    name : "joshua"
    age : 24
    items : {
        potion : 2
        weapon : 3
    }
}`

let jsonparsed : JSON = JSON.parse(jsonString);
console.log(jsonparsed);

console.log("=========================")
console.log(JSON.stringify(jsonparsed));