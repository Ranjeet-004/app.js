// async function greet(){
//     throw "404 page not found";
//     return "hello world!";//returns a promise
// }
//let hello=async()=>{};
// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was:", result);
// })
// .catch((error)=>{
//     console.log("promise was rejected with err:",err);
// });
//  let demo=async()=>{
//     return 5;
//  };

 //Await keyword
//  function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
//  }
//  async function demo(){
//     await getNum();
//     await getNum();
//       getNum();
//  }


// h1=document.querySelsctor("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         },delay);
//     });
// }
// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
// }


//Handling Rejection
// h1=document.querySelector("h1");
//  function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//               setTimeout(()=>{
//     let num=Math.floor(Math.random()*5)+1;
//     if(num>3){
//         reject("promise rejected");
//     }
//            h1.style.color=color;
//             console.log(`color changed to ${color}!`);
//              resolve("color changed!");
//          },delay);
//     });
// }
//  async function demo(){
//     try{
//      await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
//     }catch(err){
//         console.log("error caught");
//         console.log(err);
//     }
//  }

////API(Application programming Interface)
// let jsonRes = `{
//   "From": [
//     "/x-api/getting-started/getting-access",
//     "/x-api/introduction"
//   ]
// }`;

// let validate = JSON.parse(jsonRes);
// console.log(validate.From);

// let student ={
//     name:"Ranjeet Chauhan",
//    marks:90,
// };

//our first request
// let url="https://www.google.com/search?q=apple";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//    // console.log(res.json());
// })
// .catch((err)=>{
//     console.log("Error_",err);
// });
// console.log("I am happy");




//Using Fetch with async-await
let Url="https://www.google.com/search?q=apple&rlz=1C1GEWG_enIN1130IN1131&oq=apple&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyGAgBEC4YQxjHARixAxjJAxjRAxiABBiKBTIMCAIQLhhDGIAEGIoFMgwIAxAAGEMYgAQYigUyDAgEEC4YQxiABBiKBTINCAUQABiSAxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAAGEMYgAQYigUyDAgIEAAYQxiABBiKBTIMCAkQABhDGIAEGIoF0gEJMTEyNjdqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8/fact";
async function getFacts(){
    try{
        
        let res=await fetch(Url);
        let data=await res.json();
        console.log(data.fact);

        let res2=await fetch(Url);
        let data2=await res2.json();
        console.log(data2.fact); 
    }
    catch(e){
        console.log("error_",e);
    }
    console.log("bye");
}
    try{
        
        let res=await fetch(Url);
        let data=await res.json();
        console.log(data.fact);

        let res2=await fetch(Url);
        let data2=await res2.json();
        console.log(data2.fact); 
    }
    catch(e){
        console.log("error_",e);
    }
    console.log("bye");
