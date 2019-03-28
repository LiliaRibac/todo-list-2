const arrayTodo = [];


function addTodoItem () {
    const todo = document.getElementById("addItemInput");

    if (todo.value === ""){
        alert("You need to add an item to the input")
    } else {
        arrayTodo.push(todo.value);
        todo.value = "";
    }

    console.table(arrayTodo)

    // call function to list items
    listTodoItems()
    stripSlideClass()
}

 
 function listTodoItems() {
    const todoList = document.getElementById("todoList");

    todoList.innerHTML = "";

    if ( arrayTodo.length !== 0 ){
        for (let i = 0; i < arrayTodo.length; i++) {
        todoList.innerHTML +=`<div class="animated slideInLeft"><button class="thrash m-3 " style="color:white" onclick="remove(${i})">${arrayTodo[i]} <i class="fas fa-trash" style="color:white"></i></button></div>`
        }
    }
}

function remove(itemIndex) {
    arrayTodo.splice(itemIndex, 1);

    listTodoItems();
}

function stripSlideClass() {
    const todoListItems = document.querySelectorAll(".slideInLeft");

    console.log(todoListItems)
    for(let i = 0; i < todoListItems.length; i++){
        console.log(todoListItems[i].classList)
        todoListItems[i].classList.remove('slideInLeft');
    }
}