//what are the differences between the var and let keywords 

let letted = "letted";
var vared = "vared";
{
    console.log(letted)
    console.log(vared)
    let letted2 = "letted2";
    var vared2 = "varred2";
}

//console.log(letted2); //here cannot find letted2 it is block scoped
console.log(vared2); // we are able to find vared2 it leaks from block scope

if(true){
    {
        {
            let letted3 = "letted3";
            var vared3 = "varred3";
            //here letted3 is destroyed it reaches the end of the its scope and lifetime
        }
    }
}
//console.log(letted3); //same story here 
console.log(vared3); //however we can see that varred3 leaks through the scopes and ends up 
//in the global scope

const fun = () => {
    var varred4 = "varred4";
    let letted4 = "letted4";
    //both letted and varred4 are destroyed at the end of the function
    //so the way letted variables work is that they are block scoped
    //and varred variables are function scoped so if var outside of a function 
    //it becomes a global variable which is most likely undesidrable
    //so we should use let only 
}
fun();
// console.log(varred4);
// console.log(letted4);