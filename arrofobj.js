
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