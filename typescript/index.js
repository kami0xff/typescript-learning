//in js we have primitive types and reference types
//string number undefined null true false are primitive 
//arrays and objects are reference types 
//in js variables do not have types VALUES have types !!
//
var Kami;
(function (Kami) {
    var Cache = /** @class */ (function () {
        function Cache() {
            this.id = 1;
        }
        return Cache;
    }());
    var obj = {
        text: "mutable string",
        num: 10,
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
    var func = function (obj) {
        obj.text = "mutated text";
        obj.num = 20;
    };
    var func2 = function (obj) {
        obj.text = "mutated text func2";
        obj.num = 30;
        obj.arr.reverse();
        console.log(obj);
    };
    var func3 = function (obj) {
        obj.text = "mutated text func3";
        obj.num = 40;
    };
    console.log(obj);
    func2(obj);
    console.log(obj);
    // let canvas = document.getElementById("canvas");
    // let context = canvas
    // console.log("test");
})(Kami || (Kami = {}));
