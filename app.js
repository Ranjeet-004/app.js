let arr=[1,2,3,4,5];
let print=function(el){
    console.log(el);
};
arr.forEach(print);

//map
let num=[1,2,3,4,5,6];
let double=num.map((el)=>{
return el*2;
});


let students=[
    {
        name:"Aman",
        marks:95,
    },
    {
        name:"Shradha",
        marks:95,
    },
    {
        name:"Shashi",
        marks:96,
    },
];