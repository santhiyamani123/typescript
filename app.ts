// function add(a:number,b:number):number
// {
//     return a+b;
// }

// console.log(add(1,2));

// var concept

// var a = 10;
// console.log(window.a);

// let a = 10;
// console.log(window.a);

// var a = 10;
// var a = 20;
// console.log(a);


// let a = 10;
// let a = 20;
// console.log(a);


// var a = 10;
// function f()
// {
//     console.log(a);
// }
// f();

// within function 
// var a = 10;
// function f()
// {
//     var a = 20;
//     return a;
// }
// console.log(f());


// within anther  function 

// function f()
// {
//     var a = 10;
//     return function g(){
//         var b =a+1;
//         return b;
//     };
//     }
//     var g = f();
//     console.log(g());

// function f(shouldInitialized:boolean):number | undefined
// {
//     if(shouldInitialized)
//     {
//         var x = 10;
//     }
//     return x;
// }

// console.log(f(true));
// console.log(f(false));

// Duplicate identifier  for let

// function f(d:number)
// {
//     let d = 10;
//     return d;
// }
// f(1);

function sumMatrix(matrix:number[][])
{
    var sum = 0;
    for(let i = 0; i < matrix.length; i++)
    {
       var currentRow = matrix[i];

       for(let i = 0; i < matrix.length; i++)
       {
        sum+currentRow[i];
       }
       return sum;
    }
}
console.log(sumMatrix([[1,2,3],[4,5,6]]));

