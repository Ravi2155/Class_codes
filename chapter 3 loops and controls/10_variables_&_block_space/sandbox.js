//vaiables and block space

// let age = 30;//can be access anywhere

// if(true){
//     age=40;
//     console.log('outside code block:',age);
// }

// console.log('outside code block:',age);

//---------------------------------------------------------------------------------

// let age = 30;//can be access anywhere

// // let age =50;//not this 
// if(true){
//     let age=40;//we can do these 
//     console.log('inside code block:',age);
// }

// console.log('outside code block:',age);

//------------------------------------------------------------------

// let age = 30;//can be access anywhere

// if(true){
//     //callled creating local scope of variable
//     let age=40;
//     let name='ravi';
//     console.log('outside code block:',age,name);
// }

// console.log('outside code block:',age,name);//name cant be access here


//-----------------------------------------------------------------------------------------------

// let age = 30;//can be access anywhere

// if(true){
//     //callled creating local scope of variable
//     let age=40;
//     let name='ravi';
//     console.log('outside code block:',age,name);

//     if(true){
//         let age =50;
//        console.log('inside 2nd code block',age,name); 
//     }
// }

// console.log('outside code block:',age,name);//name cant be access here


//--------------------------------------------------------------------------------------------------------------

const age = 30;//can be access anywhere

if(true){
    //callled creating local scope of variable
    const age=40;
    const name='ravi';
    console.log('outside code block:',age,name);

    if(true){
       const age =50;
       console.log('inside 2nd code block',age,name);
        var test ='hello';//can not apply property of block scope
        //that is why we prefer let instead of var
    }
}

console.log('outside code block:',age,test);