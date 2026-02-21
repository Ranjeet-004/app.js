//for Each
//  let arr=[1,2,3,4,5];
//  let print=function(el){
//     console.log(el);
//  };
//     arr.forEach(print);
 

// let Arr=[{
//     name:"Raman",
//     marks:90,
// },
// {
//     name:"Mohan",
//     marks:90,
// },
// {
//     name:"Aman",
//     marks:95,
// }
// ];
// Arr.forEach ( (student)=>{
//     console.log(student.marks);
// });

//map
let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*2;
});

//
// let students=[{
//     Name:"Amir",
//     Marks:95,
// },
// {
//     Name:"Ranjeet",
//     Marks:94.4,
// },
// {
// Name:"Rajat",
// Marks:93,
// }];
// let gpa=students.map((el)=>{
//   return el.marks/10;  
// });

//Filter
let Nums=[1,2,3,4,5,6,8,7,9];
let ans=Nums.filter((el)=>{
    return el%2==0;
});

//some
[1,2,3,4,5].some((el)=>(el%2==0));

//Reduce Methods
let nums=[1,2,3,4,5,6,7,8];
let finalVal=nums.reduce((res,el)=>{
    console.log(res);
    return res+el;
});
console.log(finalVal);

//Reduce
let arr=[1,4,2,5,6,7,2,9,2];
let max=arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        max;
    }
});
console.log(max);
