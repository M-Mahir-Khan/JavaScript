// CLASSLIST 

// const sectionTodo = document.querySelector(".todo-section")
// // console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark')
// sectionTodo.classList.remove('bg-dark')
// const ans = sectionTodo.classList.contains('container')
// console.log(ans);
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");



// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li")
// // // const newTodoItemText = document.createTextNode("Teach students")
// newTodoItem.textContent = "Teach students"
// const todoList = document.querySelector(".todo-list ")
// todoList.append(newTodoItem)
// console.log(newTodoItem);

// const newTodoItem2 = document.createElement("li")
// newTodoItem2.textContent = "Third list"
// todoList.prepend(newTodoItem2)
// console.log(newTodoItem2);

// const todoListItem = document.createElement("li")
// todoListItem.textContent = "Hello world";
// // const todoList = document.querySelector(".todo-list")
// todoList.prepend(todoListItem)

// todoListItem.remove()

// Before
// After

// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = "Teach students"
// const todoList = document.querySelector(".todo-list")
// todoList.after(newTodoItem)
// todoList.before(newTodoItem)



// elem.insertAdjacentHTML(whete, html)
// beforebegin
// afterbegin
// beforeend
// afterehd

// const  todoList = document.querySelector(".todo-list")
// todoList.insertAdjacentHTML("afterbegin", "<li>Teach students</li>")


// How to get the dimantion of element 
//  height 
// width

// const sectionTodo = document.querySelector(".todo-section")
// const info = sectionTodo.getBoundingClientRect();
// console.log(info);