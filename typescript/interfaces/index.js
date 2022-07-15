var printModelId = function (model) {
    console.log(model.id);
};
//we can use the interface to describe the shape of the model object that we expect
var printModelId2 = function (model) {
    console.log(model.id);
};
var model = { id: 12, name: "kami" };
printModelId(model);
printModelId2(model);
