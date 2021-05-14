// COMMON STRING METHODS

let email='mari@gmail.com';

let resul=email.lastIndexOf('o');
console.log(resul);

let sli = email.slice(2,5);
//slice take starting index and ending index
console.log(sli);

let subs=email.substr(4,2);
// substr takes where to start and how many letters do user need
console.log(subs);

let rep=email.replace('m','w');
//change the first occurence of the result
console.log(rep);