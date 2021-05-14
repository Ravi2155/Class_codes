// varables declared with var is called functional scoped
// variables declaredd with let and const is called block scoped

// developer preferred that in ECMAScript and Mdern Javascript ==> don't use var keyword

// var name ="vinod";
// console.log(name);

// let name ="vinod";
// console.log(name);

// const name ="vinod";
// console.log(name);

// var name="Ravi";
// name="Panchal";
// console.log(name);

// let name="Ravi";
// name="Panchal";
// console.log(name);

// const name="Ravi";
// name="Panchal";
// console.log(name);

// function hey(ele){
    // if(ele){
    //     let name= "Ravi";
    //     const sirname="Panchal";
    //     console.log(`my name is ${name} ${sirname}`);
    // }

    // if(ele){
    //     var name= "Ravi";
    //     var sirname="Panchal";
    // }
    // console.log(`my name is ${name} ${sirname}`);

    // if(ele){
    //     let name= "Ravi";
    //     let sirname="Panchal";
    // }
    // console.log(`my name is ${name} ${sirname}`);
// }
// hey(true);

//EXAMPLE 2::

// if(true){
//     var varVariable="Heyy";
// }
// console.log(varVariable);

// if(true){
//     let letVariable ="Hello";
// ( what if we use const)
// }
// console.log(letVariable);

//EXAMPLE 3::

// if(true){
//     var varVariable="Heyy";
// }
// var varVariable="hello";
// console.log(varVariable);

// if(true){
//     let letVariable ="Hello";
// }
// let letVariable="Hi";
// console.log(letVariable);

// let letVariable="hello";
// let letVariable="Hi";
// console.log(letVariable);

//Conclusion:
//due to this in long programm you use a variable and if we redeclare that variable again the var will let us do that but 
// if we use the let variable it will throw the error so using let will givethis banifit


//Example 4:
// console.log(varVariable);
// var varVariable="hey";
// ==> what will be the output==> it doesn't give us errors==>it will giveus the undefined which means it is saying that the variable exist in the programm somewhere but it is not defined 
// what if we use the let????
// what if we use the const????

//Example 5:

// const constVariable=1;
// let letVariable=1;

// constVariable=2;
// letVariable=2;

//Const and let is pretty same varible but the main difference between them is we can not reiniate the vale of const variable as i said earlier


//EXAMPLE 6:

// var count =0;
// if(true){
//     var count=0;
//     console.log(count);
//     if(true){
//         console.log(count+1);
//     }
// }
// console.log(count+1);

//Why it give
//0
//1
//1

//EXAMPLE 7:

// const constVarible ={ username:"ravi"};
// constVarible.username="hello";
// console.log(constVariable);

// const allow us to change the property of the objects==> if there is any object


//EXAMPLE 7:
// const constVarible ={ username:"ravi"};
// const constVarible ={username:"hello",password="letmein"};
// console.log(constVariable);

// const not allow us to add the property in the objects

// var is fucntion scoped which means==> function  ka { <==starting and ending==> } that area is called function scoped
            // which means  if we declare any variable in fucntion so we can access that varibale in anywhere int the fucntion
            //fucntion scoped varible is available in anywhere in the function  that is declared
            //we can redeclare var variable as many times ads possible
// let is block scoped which means==> if ka  { <==starting and ending==> } that is one block and that block is called block scoped==> any {} is called bock scoped
            // due to block scoped we can access the let or const varible in the particular block only
            //block scoped varible is available in only block where he declared example==> for loop if loop 
            //we can not redeclare same let variable and  the const variable


            
//what will be the output??
// var username="ravi";
// if(true){
//     var username="amit";    
//     console.log(username);
// }
// console.log(username);

//what will be the output???
// let username="ravi";
// if(true){
//     let username="amit";    
//     console.log(username);
// }
// console.log(username);

//what will be the output???
// const username="ravi";
// if(true){
//     const username="amit";    
//     console.log(username);
// }
// console.log(username);



//------------------------------------------------------------------------------------------------------------------------------------------
// let name = "Ilya";

// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

// alert( `hello ${name}` ); // ?

//what is the output of the above lines
//------------------------------------------------------------------------------------------------------------------------------------------
// naming convection:-
// for const we use two naming convection like capital letters
    // const PI =3.14;
    // const username=document.getElementById('username').value;

    // --> use capital letters for constant which is defined in the program like you are not taking const values from the user
    //--> use small letters for constant when you are gonna take the value from the use