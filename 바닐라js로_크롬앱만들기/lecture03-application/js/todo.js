const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id:Date.now(),
        text:newToDo
    };
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
}

function deleteDoto(event){
    //console.dir(this.parentElement);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newToDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "✖️";
    button.addEventListener("click", deleteDoto);

    li.appendChild(span);
    li.appendChild(button);
    li.id = newToDoObj.id;
    
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintTodo);
}
