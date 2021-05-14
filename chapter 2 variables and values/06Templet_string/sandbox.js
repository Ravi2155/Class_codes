// templet strings
const title = 'Best Reads of 2019';
const author= 'Mario';
const likes = 30;

// concatenation way
// let result = 'The blog Called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// templet string way(PREFERABLE)
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
let html=`
<h2>${title}</h2>
<p>${author}</p>
<span> This blog has ${likes} likes.</span>
`;

console.log(html);