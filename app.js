var a = 10;
a = 'Hello';
a = true;
a = {
    name: 'abc',
    age: 24
};
console.log(a.name);
a = [1, 2, 3, 4];
a.forEach(function (a) { return console.log(a); });
//number type
var n1 = 30;
var n2 = 30;
var add = function (c, d) {
    return c + d;
};
console.log(add(n1, n2));
//string type 
var s1;
s1 = 'santhiyapapa';
var greet = function (a) {
    return "".concat(a, " Welcome Back!");
};
console.log(greet(s1));
//boolean type
var b = true;
//null and undefined type
var a = undefined;
var b = null;
var n = 10;
var n2 = undefined;
var s = null;
//BigInit type 
var u = BigInt(10);
var w = 100n;
//Array type
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3, string = [1, 2, 3, 4];
//union type array 
var arr4 = [1, 'a1', true, 2, 'a2', true, 3, 'a3', true];
arr1[0] = 2;
arr4[0] = 'Hello';
//print for squantially
arr4.forEach(function (a) { return console.log(a); });
//multi deminision array 
var mul = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
mul.forEach(function (a1) {
    a1.forEach(function (a2) { return console.log(a2); });
});


const array = [
    {id : 1 , name : "john"},
    {id : 1 , name : "don"},
    {id : 2 , name : "santhiya"},
    {id : 2 , name : "santhosh"},
    {id : 3 , name : "devi"},
    {id : 3 , name : "priya"},
    {id : 4 , name : "sindhu"},
    {id : 4 , name : "sangeetha"},
    {id : 5 , name : "sri"},
    {id : 5 , name : "sumathi"},
    {id : 6 , name : "nerslin"},
    {id : 6 , name : "reka"},
    
];

const result = array.reduce((finalArray,current) => {
    let obj = finalArray.find((item) => item.id === current.id);

    if(obj){
        return finalArray;
    }
    return finalArray.concat([current]);
}, []);

console.log("result :->",result);
