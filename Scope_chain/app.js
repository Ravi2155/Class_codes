//lexical environment

// what is the lexical environment==> we can say the lexical environment by seeing that where the function is declared 

//just for gk

// lexical environment has two scopes the local scope and parent scope 

// var ame ="Ravi";
// function sayName(){
//     var age=22;
//     console.log(age);
//     //  console.log(ame);

//     function sayAge(){
//         function say(){
//             console.log("say wala function");
//         }
//         var ame="ravo";
//         console.log(age);
//         console.log(ame);
//         return say;
//     }
//     return sayAge;
// }
// sayName()()();
// console.log(sayName()());
// console.log(ag);
// sayAge();
// sayName()();
// var fun = sayName();
// fun();
// console.log(fun);
// myfun();

// what will happen ??

//clouser is the combination of lexical scope and function 

// first the sayName will go it will check the local scope but didnt find the variable in the local scope after that it will seacrh through his parent scope means global scope and then print it..same for sayAge  

// for the line 16==> the sayAge is not defined in the gloabal scope and there is not parent scope so it will give us an error 

var m;
for(var i=0 ; i<10; m=i++)
{
    console.log(m,i);
}
// console.log(i);