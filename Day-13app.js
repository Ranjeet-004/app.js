//Lec-20 ,object Literals
let Delhi={
    latitude : "28.7041 N",
    longitude:"77.1025 E"
};
//for student
const student={
    name:"shradha",
    age:23,
    marks:94.4,
    city:"Delhi"
};
//fore item
const item = {
    price:100.99,
    discount:50,
    colors:["red","pink"]


}
//Creating Post :Thread & Twitter
const post={
    username:"@Ranjeet Chauhan",
    content:"This is my #firstPost",
    Likes:150,
    reposts:5,
    tags:["@apnacollege","@delta"]
};
//Get value
let Student={
    name:"ranjeet",
    marks:78,
};
student["name"]//for getting
student.name//for getting

//js automatically converts objects keys to strings,
// even if we made num as a key,the num will be converted to string
const obj ={
    1:"a",
    2:"b",
    null:"c",
    true:"d",
    undefined:"e"
};

//Add/Update value
const sTudent={
    name:'shradha',
    age:23,
    marks:94.4,
    city:'mumbai'
};

//Nested object
//storing information pf multiple students
const classInfo={
    Ranjeet:{
        grade:"A+",
        city:"Delhi"
    },
    Aman:{
        grade:"A",
        city:"Delhi"
    },
    Karan:{
        grade:"B+",
        city:"Mumbai"
    }
};

//Array of Objects(Storing information of multiple students)
const CLassInfo=[
    {
        name:"aman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"Ranjeet",
        grade:"A+",
        city:"Pune"
    },
    {
        name:"Karan",
        grade:"O",
        city:"Mumbai"
    }
];
// //Math Objects(foor-return small value,ceil give large value)
// console.log(Math.floor(5));
// console.log(Math.floor(5.5));
// console.log(Math.floor(5.999999));
// console.log(Math.floor(-5));
// console.log(Math.floor(-5.5));
// //ceil(return large value)
// console.log(Math.ceil(5));
// console.log(Math.ceil(5.000000001));
// console.log(Math.ceil(-5.5));
// //random-(return changeable value every time)
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random()*5);
// console.log(Math.random()*10);
// console.log(Math.random()+1);
// console.log(Math.random()/5);
// //Math.abs-
// console.log(Math.abs(12));
// //Math.pow
// console.log(Math.pow(5,4));

// //Practice Question-1
// //print num (1-100)
// console.log(Math.floor(Math.random()*100)+1);
// console.log(Math.floor(Math.random()*100)+1);
// console.log(Math.floor(Math.random()*100)+1);
// console.log(Math.floor(Math.random()*100)+1);
// console.log(Math.floor(Math.random()*100)+1);
// //Practice Question-2
// //Print num (1-5)
// console.log(Math.floor(Math.random()*5)+1);
// console.log(Math.floor(Math.random()*5)+1);
// console.log(Math.floor(Math.random()*5)+1);

// //guessig game
// // const max=prompt("enter the max numnber");
// // const random=Math.floor(Math.random()*max)+1;
// // let guess=prompt("guess the numbers");
// // while(true){
// //     if(guess=="quiet"){
// //         console.log("user quiet");
// //         break;
// //     }
// //     else if(guess<random){
// //         guess=prompt("your guess was too small.pls try again");
// //     }else{
// //         guess=prompt("your guess was too large.Pls try again");
// //     }

// // }

// //Lec-21.1 Function
// // function hello(){
// //     console.log("hello");
// // }
// // hello();
// // hello();
// // hello();

// // // 21.1.1
// // function print1to5(){
// //     for(let i=1;i<5;i++){
// //         console.log(i);
// //     }
// // }
// //     print1to5();
// //     print1ti5();
// //     print1ti5();

// // //21.1.2

// // // function isAdult(){
// // //     let age=19;
// // //     if(age>=18){
// // //         console.log("isAdult");
// // //     }else{
// // //         console.log("notAdult");
// // //     }
// // // }
// // // isAdult();

// //  function printPoem(){
// //     console.log("Twinkle Twinkle little star");
// //     console.log("How I wonder what you are");
// //     }
// //     printPoem();

// // function printName(){
// //     console.log("Ranjeet Chauhan");
// // }
// // printName();
// // printName();
// // printName();
// // printName();


//  function rollDice(){
//      let rand=Math.floor(Math.random()*6)+1;
//      console.log(rand);
//  }
// rollDice();
// rollDice();
// rollDice();
// rollDice();

//function with Agreements
// function printName(name){
//     console.log(name);
// }
// printName("Ranjeet");
// printName("Ranjeet");
// printName("Ranjeet");


// //Return keyword
// function sum(a,b){
//     return a+b;
// }
// let s=sum(3,6);
// console.log(s);

//methods
const calculator={
    add:function(a,b){
    return a+b;
},
 sub:function(a,b){
    return a-b;
 },
 mul:function(a,b){
    return a*b;
 },
};