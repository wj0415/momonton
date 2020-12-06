const body = document.querySelector("body");
const image = new Image();
const IMG_NUMBER = 3;

function handleImgLoad()
{
    console.log("finished loading");
    body.appendChild(image);
}
function paintImage(imgNumber){
    
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    image.addEventListener("load", handleImgLoad);
    
}

function getRandom(){
    return Math.floor(Math.random()*IMG_NUMBER);
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();