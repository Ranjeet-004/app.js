//call stack
// function hello(){
//     console.log("inside hello function");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello function");
//     hello();
// }
 
// console.log("calling demo function");
// demo();
// console.log("DONE,bye!");


//Visualizing the call stack
// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }


////Js is single Threaded
// setTimeout(()=>{
//     console.log("apna college"); 
// },2000);
// setTimeout(()=>{
//     console.log("hello world");
// },2000);
// console.log("hello...");

////Callback hell
// h1=document.querySelector("h1");
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//     if(nextColorChange)nextColorChange();
//     },delay);
// }
// changeColor("red",1000,()=>{
//   changeColor("Orange",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("yellow",1000,()=>{  
// });
// });
// });
// });


// //Promises
// function saveDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }
// saveDb(
//     "apna college",
//     ()=>{
//         console.log("success:your data was saved");

// saveDb(
//     "hello world",()=>{
//         console.log("success2:data2saved");

// saveDb("Ranjeet Chauhan",()=>{
//     console.log("success3:data3 saved");
// },
// ()=>{
//     console.log("failure3:weak connection");
// }
// );
//     },

//     ()=>{
//         console.log("failure2:weak connection");
//     }
// );
//     },
//     ()=>{
//         console.log("failure:weak connection:data not saved");
//         }
// );


////Refactoring with promises
//  function saveDb(data){
//     return new Promise((success,failure)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//          if(internetSpeed>4){
//              success();
//         }else{
//              failure();
//          }
//      });
// }
//saveDb("apna college");


//Promises  then() & catch()
// let request = saveDb("Ranjeet Chauhan");
// request
// .then(()=>{
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     //console.log(request);
// });//


//// Promise chaining
// saveToDbPromise("apna college")
// .then(()=>{
//     console.log("promise1 resolvrd");
//     return saveToDbPromise("hello world");
// })
// .then(()=>{
//     console.log("promise2 resolved");
// })
// .catch(()=>{
//     console.log("same promise rejected");
// });


// ////Refactoring old code
// h1=document.querySelector("h1");
// function changeColor (color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolve("color changed!");
//         },delay);
//     });
// }
// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange,1000");
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green,1000");
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("blue,1000");
// })
// .then(()=>{
//     console.log("blue color was completed"); 
// });


////Async functions
