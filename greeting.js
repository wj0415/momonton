const form = document.querySelector(".js-name-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");
const toDoForm = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(name){
    localStorage.setItem(USER_LS,name);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    saveName(currentValue);

}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}
function paintGreetings(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Welcome ${text}❤`;
    toDoForm.classList.add(SHOWING_CN);
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreetings(currentUser);
    }
}
function init(){
    loadName();

}
init();