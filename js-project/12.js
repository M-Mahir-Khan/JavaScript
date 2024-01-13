// select element using get Elemen By Id

// const mainHeading = document.getElementById("main-heading")
// console.log(mainHeading);

// select element using query selector

// const logo = document.querySelector(".logo")
// console.log(logo);

// const navItems = document.querySelectorAll(".nav-item")
// console.log(navItems);


// change text 
// textContent and innerText
// const mainHeading = document.getElementById("main-heading")
// console.log(mainHeading.textContent);
// mainHeading.textContent = "This is sonmething else.."
// console.log(mainHeading.textContent);

// change the styles of elements
// const mainHeading = document.querySelector("div.headline h2")
// mainHeading.style.backgroundColor = "blue";
// mainHeading.style.border = "2px solid green";

// get and set attributes

// const link = document.querySelector("a")
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));


// get multiple elements using getElement by class name 
// get multiple elements using querySelectorAll

// const navItems = document.getElementsByTagName("a"); //HTML Collection
// console.log(navItems);

// we can't use forEach method to iterte through HTMLCollecton
// simple for loop
// for of loop

// for(let i= 0; i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor ="#fff";
//     navItem.style.color = "blue";l
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }