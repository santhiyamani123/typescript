let simpleArray = [1, 4, 5, 1, 1, 1];
simpleArray = simpleArray.filter(
  (element, i) => i === simpleArray.indexOf(element)
);
console.log(simpleArray); //[ 1, 4, 5 ]


