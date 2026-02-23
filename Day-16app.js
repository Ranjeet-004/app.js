//Practice Question-1
//innerText(inside the html )
let para1=document.createElement('p');
para1.innerText="Hey I am ready!";
//querySelector - for selection
document.querySelector('body').append(para1);
//classlist is used to css to give the color
para1.classList.add("red");

//Practice Question-2
//innerText(inside the html )
let h3=document.createElement('h3');
h3.innerText="I am blue.";
//querySelector - for selection
document.querySelector('body').append(h3);
//classlist is used to css to give the color
h3.classList.add("h3");

//Practice Question-3
let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");

div.innerText="I'm in a div";
h1.innerText="me too";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);
