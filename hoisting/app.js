// hoisting is nothing but  varible and function declaration are processed first before running the code 
//so it means we can delare the variable anywhere in the code and it is equivalent to declaring the variable in the top
// and we can use the funtion and variable before we declare them
//in the hoisting the javascript first scan the code and assign the space to the everyvariable you have declared in the code

//------------------------------------------------------------------------------------------------------------------------------------------

// console.log(notdeclared); //ReferenceError: notdeclared is not defined bcz this varible is not used anywhere in the programm

//-------------------------------------------------------------------------------------------------------------------------------------------

// console.log(definedLater);
// var definedLater;
// definedLater='I am defined';
// console.log(definedLater);

//what is input???


//if you guessed right it means you know it like we have declared the varible and it is hoisted right above everything but 
// the variable doesnt have any value right now so that is why it give us the undefined op
// it will be like

// var definedLater;
// console.log(definedLater);
// definedLater='I am defined';

//-------------------------------------------------------------------------------------------------------------------------------------------

// console.log(definedSimutaneously);
// var definedSimutaneously="i'm defined";

//think about this and tell me what wiil be the output

//it is becuae the we declare the varible and we given value(defination)
//but in hoisting the declaration part which means (var definedSimutaneously;) will go to top of the code not the defination part
//it will give undefined becaure the variable is declared but it is not defined

// console.log(definedSimutaneously);
// var definedSimutaneously="i'm defined";
// console.log(definedSimutaneously);

// if you run above code then the third line will print the variable value

//-------------------------------------------------------------------------------------------------------------------------------------------


// var age=23;
// var age=25;

//what will happen will it be hoisted once or will it be hoisted twice??

//so first  js will scan the first line and then give the space to the age (remember value is undefined)
//when it comes to second line the age is already there so it won't create another space
// well it wont hoist the second line because js is already hoisted the age

//-------------------------------------------------------------------------------------------------------------------------------------------

//that is all about the variables now we move to the functions

// doSomething();
// function doSomething(){
//     console.log('I did It!');
// }

//it will give the output..doesnt give any error you know why
// (there is catch in declaring the function what if i use the "=" sign to declare the fucntion?)
// because the whole function will go to the top of the code just like below

// function doSomething(){
//     console.log('I did It!');
// }
// doSomething();

//we can say that the function is completly hoisted and the variables are partially hoisted
//-------------------------------------------------------------------------------------------------------------------------------------------

// functionVar();//give error ==> TypeError: functionVar is not a function
// var functionVar=function(){
//     console.log('I did it!');
// }

//we are storing a function in variable 
//give that error because we declare the variable but we havent assign any function to the variable 
// yes you did it my boiiii...like wise you said that it will give us an error..because the "var fucntionVar" will go to all the top
// but the defination will remain below..so that is why it will give us an error

//-------------------------------------------------------------------------------------------------------------------------------------------

//  console.log(name);
//  let name="Ravi";

// what will be the output==>

// let const and var willl be hoisted
// but in the case of let and const there is no value will be initiated
//  which means there is no undefined value  will be assign to let and const variable

//variable is hoisted but there is not value initialized it is called temporal dead zone

//and the value is not initialized we can not access the variable





// we can see these in the javascript visuliser

//and this is how we completed the hoisting

//conclusion: koi uper aye na aye varible uper ana chahie varn FATT KE CHAR HO JAYEGI js debugging me