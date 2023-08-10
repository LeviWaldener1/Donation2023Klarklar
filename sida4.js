function init(){
	
    var org = localStorage.getItem("org");
    var number = localStorage.getItem("number");
    var div1 = document.getElementsByClassName("div1")[0];
    var div = document.createElement("div10");
    
    div.style.background = "white";
    div.style.margin = "0px";
    div.style.fontSizeAdjust = "2";
    div1.appendChild(div);

    var bar = document.getElementsByClassName("bar-one");
    bar[0].children[0].innerHTML = org;
    bar[0].children[1].attributes[1].value = 300 + parseInt(number);

}
window.addEventListener("load", init);
