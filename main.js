//console.log(document.body); 

// 1-usul Id orqali ushlash...

// var id = document.getElementById("ism")
// console.log(id);

// console.log(document.getElementById("inp"));

//////////////////
// var inp = document.getElementById("inp")
// console.log(inp.id);

// var inp = document.getElementById("inp")
// console.log(inp.value);

// var inp = document.getElementById("inp")
// console.log(inp.style);
//////////////////

// 2-usul  ClassName orqali ushlash...

// var a = document.getElementsByClassName("text")
// console.log(a);

// var b = document.getElementsByClassName("text")
// console.log(b[0]);

// var a = document.getElementsByClassName("text")
// console.log(a [0].className);

//////////////////

// 3-usul  TagName orqali ushlash...

// var a = document.getElementsByTagName("p")
// console.log(a);

// var a = document.getElementsByTagName("p")
// console.log(a [0].className);//text

//////////////////

// 4-usul  querySelector orqali ushlash...
// berilgan sorovdan kop bolsa birinchisini chiqarib beradi
//text nomli class 2ta edi 1csini cqarib berdi

// let a = document.querySelector("#inp")   //.text dagi nuqta classlarnini ichidan text nomlisini qidiradi,#inp Id larni ichidan,TagName da h1,input,button..... shunga oxshash 
// console.log(a);


// let a = document.getElementById('box');  ///textContent ikki tag orasidegi joy <div> shu yer <div/>
// a.textContent = 'Content'


// let b = document.getElementById('box'); 
// b.textContent += ' Men keldim'


//////////////////
// innerText--textContent bn bir xil ishledi

// let Div = document.getElementById("quti")
// Div.innerText += "Oybek Frontend Developer"
// console.log(Div);

//////////////////
// InnerHtml

//let Div1 = document.getElementById("quti2")
//Div1.innerHTML += "<h1 style='color:orange'>Oybek Frontend Developer<h1/>" //ichiga element(tag) berish mn bunda
//////////////////

// let Name=document.getElementById("ism")
// Name.style.color='orange'
// Name.style.backgroundColor='blue'
// Name.style.width='60px'
// Name.style.border='6px groove orange'

/////////////Homework

let Button = document.getElementById('btn')
let color = prompt("Buttonga  yozuviga color kiriting")
Button.style.color = color

let width = prompt("Buttonga width kiriting")
Button.style.color = width

let height = prompt("Buttonga height kiriting")
Button.style.color = height

let Bckcolor = prompt("Buttonga Bckcolor kiriting")
Button.style.backgroundColor = Bckcolor

let Border = prompt("Border kiriting")

if (Border == 'none') {
   alert("ok")
} else {
 let Brrad = prompt("Buttonga BorderRadius kiriting")
    Button.style.borderRadius = Brrad
}

let hover1 = prompt("Hover kiriting")
Button.style.hover = hover1



let font = prompt("Shriftini ozgartiring")
Button.style.fontFamily = font

let fontsize = prompt("yozuv kattaligini kiriting")
Button.style.fontsize = fontsize

let fontweight = prompt("yozuv qalinligini ozgartiring")
Button.style.fontweight = fontweight


























