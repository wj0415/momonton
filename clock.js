const clock = document.querySelector(".js-clock h1");

function getTime(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    clock.innerHTML = `${h<10?`0${h}`:h}:${m<10?`0${m}`:m}:${s<10?`0${s}`:s}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();