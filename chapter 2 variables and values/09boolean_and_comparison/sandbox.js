//boolean and comparison
console.log(true,false,'true','false');



// methods can return booleans
let email='ravi@SpeechGrammarList.com';
let names=['mario','luigi','toad'];

let result = email.includes('@');
// let result = names.includes('luigi');
let rem=names.indexOf('luigi');

// false<==0
// true<==15000

// if(rem===true){
//     console.log("access granted");
// }else{
//     console.log("access denied");
// }


console.log(result,rem);


// comparison operators
let age=25;

// console.log(age==25);
// console.log(age==30);
// console.log(age!=30);
// console.log(age!=25);
// console.log(age>20);
// console.log(age<20);
// console.log(age<=25);
// console.log(age>=25);

let name ='shaun';

console.log(name == 'shaun');
//capital and small are diffeent
console.log(name == 'Shaun');
//use forst character
console.log(name > 'crystal');
//capital letter(lowercase letter>uppercase letter)
console.log(name>'Crystal');