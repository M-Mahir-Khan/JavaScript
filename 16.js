// const allButtons = document.querySelectorAll(".my-buttons button")
// console.log(allButtons);

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this);
//     })
// }

// for(let i = 0;i< allButtons.length;i++ ){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this);
//     })
// }

// allButtons.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this);
//     })
// })



// const allButtons = document.querySelectorAll(".my-buttons button")

// for(let button of allButtons){
//     button.addEventListener("click", (e)=>{
//         console.log(e.currentTarget);
//     })
// }


// Little practice with click event
const allbuttons = document.querySelectorAll(".my-buttons button")
allbuttons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333"
    })
})