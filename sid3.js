var buttons;
var search;
var donate;
var org;
var number = 0;
var lastButton = null;
var numbers = [50, 100, 200];
var div10;
var div8;
var path = "sida4.html";
function init(){
	buttons = document.querySelectorAll("div:first-of-type li");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].textContent = numbers[i].toString();
        buttons[i].value = numbers[i];
        buttons[i].addEventListener("click", clicked)
    }

    search = document.getElementById("myInput");

    search.addEventListener("keyup", checkIfValid);

    donate = document.getElementById("donate");
    donate.addEventListener("click", setValue)
    org = localStorage.getItem("org");
    var div1 = document.getElementsByClassName("div1")[0];
    div10 = document.createElement("div10");
    div10.textContent = "Vill du donera " + number + " kr till " + org; 
    div10.style.background = "white";
    div10.style.margin = "30px";
    div10.style.fontSizeAdjust = "1";
    div8 = document.getElementsByClassName("div8")[0];
    div10.style.float = "left";
    div8.appendChild(div10);
    disable();
}
window.addEventListener("load", init);


function clicked(){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.background = "white";
    }
    
    if (this != lastButton){
        this.style.background = "red";
        lastButton = this;
        number = this.value;
        enable()
    }else{
        lastButton = null;
        number = 0;
        disable()
    }
    div10.textContent = "Vill du donera " + number + " kr till " + org + "?"; 
}

function setValue(){
    if(search.value.length > 0){
        localStorage.setItem("number", search.value);
    }else{
        localStorage.setItem("number", lastButton.value);
    }
    
}

function checkIfValid(){
    if (isNumber(this.value)){
        enable()
        div10.textContent = "Vill du donera " + this.value + " kr till " + org;
    }else{
        disable()
        div10.textContent = "Vill du donera " + 0 + " kr till " + org;
    }
}

function isNumber(str) {
    if (typeof str != "string") return false 
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

function disable(){
    div8.children[0].href = "#";
    div8.children[0].style.background = "grey";
}
function enable(){
    div8.children[0].href = "/sida4.html";
    div8.children[0].style.background = "rgb(0, 255, 0)"; ;
}