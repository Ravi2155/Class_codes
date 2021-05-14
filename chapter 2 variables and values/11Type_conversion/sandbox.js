//type conversion
let score='100';

console.log(score+1);//will return 1001

score=Number(score);
console.log(score+1);//will return 101
console.log(typeof score);

let result =Number('hello');
console.log(result);//will return NaN

let results =String(50);
console.log(result , typeof result);//will return 50

let res = Boolean(0);
console.log(res,typeof res);

let re = Boolean('0');
console.log(re,typeof re);
