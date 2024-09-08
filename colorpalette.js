// ___________________________________________________________________________
//                      GETTING RANDOM NUMBERS IN EVERY DIV
// ___________________________________________________________________________
// // let divs=document.querySelectorAll(".divs");
// let div1=document.getElementById("div1");
// let div2=document.getElementById("div2");
// let div3=document.getElementById("div3");
// let div4=document.getElementById("div4");

// let btn=document.querySelector("#btn");
// function random(num){
// return Math.floor(Math.random()*(num+1))
// }
// btn.addEventListener("click", ()=>{
//     console.log("clickd");
// let msg=document.createElement("p");


//     let str=`rgb(${random(255)} ${random(255)} ${random(255)})`;
// div1.style.backgroundColor=str;
// div1.innerText=str;
//  str=`rgb(${random(255)} ${random(255)} ${random(255)})`;
// div2.style.backgroundColor=str;
// div2.innerText=str;
//  str=`rgb(${random(255)} ${random(255)} ${random(255)})`;
// div3.style.backgroundColor=str;
// div3.innerText=str;
//  str=`rgb(${random(255)} ${random(255)} ${random(255)})`;
// div4.style.backgroundColor=str;
// div4.innerText=str;

// msg.style.fontFamily="cursive";
// })


// _____________________________________________________________________________
// ___________________________________________________________________________
//                      GETTING SHADES OF SAME COLOR (MORE LIKE A PALETTE)
// ___________________________________________________________________________
// let divs=document.querySelectorAll(".divs");
// let div1=document.getElementById("div1");
// let div2=document.getElementById("div2");
// let div3=document.getElementById("div3");
// let div4=document.getElementById("div4");

// let btn=document.querySelector("#btn");
// function random(num){
// return Math.floor(Math.random()*(num+1))
// }
// btn.addEventListener("click", ()=>{
//     console.log("clickd");
// let msg=document.createElement("p");


// let str1=random(255);
// let str2=random(255);
// let str3=random(255);
//     let str=`rgb(${str1} ${str2} ${str3})`;
// div1.style.backgroundColor=str;
// // div1.innerText=str;
//  str=`rgb(${str1-60} ${str2-60} ${str3-60})`;
// div2.style.backgroundColor=str;
// // div2.innerText=str;
//  str=`rgb(${str1-100} ${str2-100} ${str3-100})`;
// div3.style.backgroundColor=str;
// // div3.innerText=str;
// str=`rgb(${str1-150} ${str2-150} ${str3-150})`;
// div4.style.backgroundColor=str;
// // div4.innerText=str;

// msg.style.fontFamily="cursive";
// })
// ____________________________________________________________________________
//                  TRYING TO DO WITH #ffffff PATTERN
// ____________________________________________________________________________
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let div3=document.getElementById("div3");
let div4=document.getElementById("div4");

let btn=document.querySelector("#btn");
function random(num){
return Math.floor(Math.random()*(num+1))
}

let arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];


btn.addEventListener("click", ()=>{
    console.log("clickd");



    let str=`#${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(1)]}${arr[random(15)]}`;
div1.style.backgroundColor=str;
div1.innerText=str;
 
 str=`#${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}`;
div2.style.backgroundColor=str;
 div2.innerText=str;

 str=`#${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}`;
div3.style.backgroundColor=str;
 div3.innerText=str;

 str=`#${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}${arr[random(15)]}`;

div4.style.backgroundColor=str;
 div4.innerText=str;
 
})
