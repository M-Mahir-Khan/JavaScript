// intro to events
// click
// event add karne ke 3 tarike hai 

// const btn = document.querySelector(".btn-headline")
// console.log(btn);
// btn.onclick = function(){
//     console.log("you clicked me !!!!!!");
// }


// btn.addEventListener("click", function(){
//     console.log("YOu clicked me !!!!!");
// })


// keypress event 
// mouseover event
// mouseleave event

const body = document.body;
body.addEventListener("keypress", (e)=>{
    console.log(e.key);
})

const mainButton = document.querySelector(".btn-headline")

mainButton.addEventListener("mouseover", ()=>{
    console.log("Hello");
})

mainButton.addEventListener("mouseleave", ()=>{
    console.log("bye");
})