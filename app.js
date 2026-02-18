
 console.log("Hellow!world!");
 let a =5;
let b=7;
console.log("sum = ",a+b);

 let pencilPrice = 10;
 let erasorPrice =5;
console.log("The total price is:", pencilPrice + erasorPrice,"Rupees");let output = `The total price is:${pencilPrice + erasorPrice}Rupees.`;
console.log(output);
//Arithmetic operator
console.log(a+b);
console.log(a-b);
 console.log(a*b);
console.log(a/b);
console.log(a%b);
//Unary operator
console.log(++a); console.log(a++);
//Assignment operator
console.log(a+=a);
console.log(a+=b);
//Comparision operator
let c=0;
let d=false;
console.log(c==d); // it compare only value
console.log(c===d); //it compare value and type

//Conditional statement
let p=14;
if(p>=18){
    console.log("you can vote");
    console.log("you can drive");
}else{
    console.log("you cannot vote");
     console.log("you cannot drive");
    }

let r=5;
console.log(5*r);
//if statement
let color="red";
if(color==="red"){
    console.log("stop! light color is red");
}
if(color="yellow"){
    console.log("slow down! light color is yellow");
}
if(color="green"){
    console.log("go,light color is green");
}

//else if statement
let age=14;
if(age>=18){
    console.log("you can vote");
}
else if(age<18){
    console.log("you cannot vote");
}

//if-else statement
let marks =75;
if(marks>=80){
    console.log("A+");
}
else if(marks>=60){
    console.log("A");
}
else if(marks>=33){
    console.log("B");
}


//switch statement
let Color="Red";
switch(Color){
    case "Red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down!");
          break;
    case "green":
        console.log("Go");
        break;
        default:
            console.log("Broken light");
}

// // Alert 
//  alert("something is wrong!");
//  alert("this is a simple alert");
//  console.log("this is a simple alert");
// //prompt

//    let rollnum = prompt("please enter your roll no");
// // //error
 console.error("this is an error msg");
// //warn
console.warn("this is warn sms");

//String method - StringName.method
let msg = "   Hello   ";
console.log("Hello");
console.log(msg.trim());// it remove the whitespace in the starting and ending

//String are immutable
let message="  apna  ";
console.log(message.trim());
 
//String method(str.toUpperCase,str.LowerCase)
let username =  "Ranjeet Chauhan";
console.log(username.toUpperCase());
console.log(username.toLowerCase());

let sms="error";
console.log(sms.toUpperCase);

//Index of
let string="ILoveCoding";
console.log(string.indexOf("Love"));
console.log(string.indexOf("i"));
//Method Chaining

let Msg="hello";
let newMsg = Msg.trim();
console.log("after trim:",newMsg);
//or
newMsg=Msg.trim().toUpperCase();
console.log(newMsg);

//slice method
let str = "ILoveCoding";
console.log(str.slice(1,4));
console.log(str.slice(-4));

//Replace method
let Str="IloveCoding";
console.log(Str.replace("love","do"));
console.log(Str.replace("Coding","Reading"));
//Repeat method
let MSg="mango";
console.log(MSg.repeat(3));
//practice Question-1
let msG="hello";
console.log(msg.trim().toUpperCase());
//practice Question -2
let Name="Apna College";
console.log(Name.slice(4,9));
console.log(Name.indexOf("na"));
console.log(Name.replace("Apna","Our"));
//Array
let students=[2,4,6,8,10];
console.log(students.length);
//Arrays method(push,Unshift,pop,shift)
let car=['audi','bmw','xuv','maruti'];
console.log(car.push('toyota'));
console.log(car.length);
//splice
let Colors = ['red','blue','black','yellow','orange'];
console.log(Colors.splice(4));
console.log(Colors);
console.log(Colors.splice(0,1));

let colors=['green','yellow','blue','orange'];
console.log(colors.splice(0,2,"black","grey"));
//Sorts an array
let $Colors = ['red','blue','black','yellow','orange'];
console.log($Colors.sort());

//loops
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
//or
for(let i=0;i<=5;i++){
    console.log(i);
}
//odd num
for(let i=1;i<15;i=i+2){
    console.log(i);
}
// reverse odd num
for(let i=15;i>1;i=i-2){
    console.log(i);
}
//even num
for(let i=2;i<20;i=i+2){
    console.log(i);
}
//reverse even num
for(let i=20;i>2;i=i-2){
    console.log(i);
}
//Infinite loop
for(let i=0;i>=5;i++){
     console.log(i);
}

//Practice question
let n=prompt("Enter your number");
n=parseInt(n);
for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}
//Nested loop
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}
//while loop
let i=5;
while(i<10){
    console.log(i);
}
i++;

//break keyword
let A=1;
while(i<=5){
    if(i==3){
    console.log(i);

}
i++;
}