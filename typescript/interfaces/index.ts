interface Model {
  id: number;
}

const printModelId = (model: Model) => {
  console.log(model.id);
};

//we can use the interface to describe the shape of the model object that we expect
const printModelId2 = (model: { id: number }) => {
  console.log(model.id);
};


//by adding name "kami" the object is still accepted by the functions
//as a parameter eventhough it has more than what the interface
//or the type description of the parameter asks for but that is ok as long 
//as it has what the interface or description requires.  


//structural typing
//passing our object that has the same shape as the declared type is fine. 
//also called duck typing. 

let model = {id:12, name:"kami"};
printModelId(model);
printModelId2(model);

//typescript offers access property checking
printModelId({id:12, name:"kami"})
//here we get an error because typescript performs
//access property checking typescript thinks its 
//a bug if we pass an object literal with more properties
//than in our Model interface but this is a bit strange 
//because technically we are doing the same thing as with 
//the model variable.

//but this is how typscript works the rationale behind this is that 
//when we pass in an object literal like this it looks like we will make use 
//of the name property but in this case we don't so its kind of redundant to have it here
//and confusing. 

//This access property checking is only performed when passing in object literals as parameters


//_brand to make sure there is no structural typing
//but the solution is so underwelming 
//maybe new features ??