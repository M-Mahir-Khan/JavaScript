const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.parentNode);
// sibling relation
// console.log(headElementNode.nextSibling.nextSibling);
const h1 = document.querySelector("h1");
const body = h1.parentNode;
// console.log(body);
body.style.color = "#efefef"
body.style.backgroundColor = "#333";
const head = document.querySelector("head")
console.log(head);
const title = head.querySelector("title")
console.log(title.childNodes);
const container = document.querySelector(".container");
console.log(container.children);
