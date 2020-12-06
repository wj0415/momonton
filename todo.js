//const toDoForm = document.querySelector(".js-toDoForm");
const toDoinput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOLIST_LS="toDoList";

let toDos = [];

function handleDelBtn(e){
    const li = e.target.parentNode;
    toDos = toDos.filter(todo =>{
        return parseInt(li.id) !== todo.id;
    })
    
    saveToDoList();
    toDoList.removeChild(li);
}
function saveToDoList(){
    localStorage.setItem(TODOLIST_LS,JSON.stringify(toDos));
}
function paintToDo(toDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length;
    span.innerHTML = toDo;

    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",handleDelBtn);

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text:toDo,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDoList();
}

function loadToDoList(){
    const loadedToDos  = localStorage.getItem(TODOLIST_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(toDo => {
            paintToDo(toDo.text);
        });
    }
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value="";
}
function init(){
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmit);

}
init();