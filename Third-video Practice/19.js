// synchronous programming vs asynchronous
// setTimeout
// function hello() {
//     console.log("Hello World");
// }

// setTimeout(hello, 1000)

// setInterval

// const body = document.body;
// const button = document.querySelector("button")

// const intervalId = setInterval(()=>{
//     const red = Math.floor(Math.random() * 126);
//     const green = Math.floor(Math.random() * 126);
//     const blue = Math.floor(Math.random() * 126);
//     const rgb = `rgb(${red}, ${green}, ${blue})`;
//     body.style.background = rgb;
//     // console.log(rgb);
// }, 1000)

// button.addEventListener("click",()=>{
//     clearInterval(intervalId)
//     button.textContent = body.style.background;
// })