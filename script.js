function loadtodos(){
    //this function will laod todos from the browser
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList":[]};
    console.log(todos);
    return todos;
}

function addToDotolocalstorage(todoText){
    const todos = loadtodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function appendtodoinHTML(todoText){
    const todoList = document.getElementById("todoList");
    const todo =document.createElement("li");
    
    todo.textContent = todoText;

    todoList.appendChild(todo);

}

document.addEventListener("DOMContentLoaded" ,() =>{
    const todoInput = document.getElementById("todoinput");

    const submitbutton  = document.getElementById("add");

    const todoList = document.getElementById("todoList");

    submitbutton.addEventListener("click",(event) =>{
        const todoText=todoInput.value;
        if(todoText === ''){
            alert("Please add something to the list")
        }else{
            addToDotolocalstorage(todoText);
            appendtodoinHTML(todoText);
            todoInput.value='';
        }

    })

    todoInput.addEventListener("change",(event) =>{
        //this event will fire when there will be change in the input tag
        const todoText = event.target.value;

        event.target.value = todoText.trim();
    })
    const todos =  loadtodos();
    todos.todoList.forEach(todo => {
        const newtodoItem= document.createElement("li");
        todoList.appendChild(newtodoItem);

    });
})