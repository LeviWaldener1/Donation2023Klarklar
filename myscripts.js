
var buttons;
var search;
var lastButton = null;
var organisations = ["Röda Korset", "Barncancerfonden", "Rädda barnen", "SOS Barnbyar", "Cancerfonden", "Hjärtlungfonden"
    ,"Hjärnfonden"];

    var descriptions = ["Röda Korset finns över hela världen för att hjälpa utsatta människor i kriser, krig och naturkatastrofer.", "Barncancerfonden är en ideell organisation, som arbetar med finansiering av barncancerforskning i Sverige.", "Rädda Barnen är en religiöst och partipolitiskt obunden organisation som värnar om barns rättigheter.", "SOS Barnbyar stöttar familjer i utsatthet så att föräldrarna kan ge sina barn en chans att växa och utvecklas.", "Cancerfondens vision är att besegra cancer, att färre personer ska drabbas av cancer och fler ska överleva.", "Hjärt-Lungfonden är en ideell insamlingsorganisation som samlar in och delar ut pengar till hjärt-lungforskning."
    ,"Hjärnfonden är en ideell organisation som samlar in pengar till forskning och information om hjärnan och dess sjukdomar."];

var div8;
var div10;
var org;
function init(){
	buttons = document.querySelectorAll("div:first-of-type li");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].textContent = organisations[i];
        buttons[i].addEventListener("click", clicked)
    }

    addOrgElements();
    search = document.getElementById("myInput");
    search.addEventListener("keyup", searchFunction);
    search.addEventListener("keyup", restartSearch);
    search.addEventListener("click", restartSearch);
    search.addEventListener("keydown", clearDescription);
    var nextPage = document.getElementById("nextPage");
    nextPage.addEventListener("click", setValue);
    search.addEventListener("keyup", checkIfValid);
    div8 = document.getElementsByClassName("div8")[0];

  
    div10 = document.createElement("div10");
    div10.className = "div10";
    div10.textContent =  org;
    div10.style.background = "white";
    div10.style.margin = "18px";
    div10.style.fontSizeAdjust = "1";
    div8 = document.getElementsByClassName("div8")[0];
    div10.style.float = "left";
    div8.appendChild(div10);

    div11 = document.createElement("div11");
    div11.className = "div11";
    div11.textContent =  org;
    div11.style.background = "white";
    div11.style.fontSizeAdjust = "0.7";
   
    
   
    var div1 = document.getElementsByClassName("div1")[0];
    div1.appendChild(div11);


    disable();
    getWheelValue();



}
window.addEventListener("load", init);

function clearDescription(e){
    if (e.key == "Backspace"){
        div11.textContent = "";
    }
}

function checkIfValid(){

    if(search.value.length > 0 || lastButton != null){
        console.log(organisations.includes(search.value));
        if (organisations.includes(search.value) || lastButton != null){
            enable();
        }
    }else{
        disable();
    }
}

function disable(){
    div8.children[0].href = "#";
    div8.children[0].style.background = "grey";
}
function enable(){
    div8.children[0].href = "/sida3.html";
    div8.children[0].style.background = "rgb(0, 255, 0)";
}


function setValue(){
    if(search.value.length > 0){
        if (organisations.includes(search.value)){
            localStorage.setItem("org", search.value);
        }
            
    }else if(lastButton != null){
        localStorage.setItem("org", lastButton.textContent);
    }
    
}

function getWheelValue(){
    org = localStorage.getItem("org");
    console.log(typeof(org));
    if (org.length > 0){
        search.value = org;
        div10.textContent = org;
        var ind = organisations.indexOf(org);
        div11.textContent = descriptions[ind];
    }
    checkIfValid();
    
}

function restartSearch(){
    var ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('p');
    if (search.value.length == 0){
        div11.textContent = "";
        for (let i = 0; i < organisations.length; i++) {
            if ( i < 3){
                li[i].style.display = "";
            }else{
                li[i].style.display = "none";
            }

        }
    }
    if (lastButton  == null){
        div10.textContent = "";
        div11.textContent = "";
    }
    
}

function clicked(){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.background = "white";
    }
    
    if (this != lastButton){
        this.style.background = "red";
        lastButton = this;
        div10.textContent =  this.textContent;
        var ind = organisations.indexOf(this.textContent);
        div11.textContent = descriptions[ind];
        search.value = this.textContent;
    }else{
        lastButton = null;
        div10.textContent = "";
        div11.textContent = "";
        search.value = "";
        }
    checkIfValid();
   
}

function searchFunction(){
    var li, a, i, txtValue;
    var ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('p');
    let count = 0;
    for (i = 0; i < organisations.length; i++) {
        txtValue = organisations[i]
        if (txtValue.toUpperCase().indexOf(this.value.toUpperCase()) > -1 && count < 3) {
          
          li[i].style.display = "";
          count++;
        } else {
          li[i].style.display = "none";
        }
    }

    setRed();
}


function setRed(){
    let ind = -1;
    var ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('p');
    for (i = organisations.length-1; 0 <= i ; i--) {
        li[i].style.background = "white";
        if (li[i].style.display == ""){
            ind = i;
        }
        
    }
    if (ind >= 0 && search.value.length > 0 ){
        li[ind].style.background = "red";
    }
   
}


function addOrgElements(){
    var ul = document.getElementById("myUL");
    for (let i = 0; i < organisations.length; i++) {
        var li =  document.createElement("p");
        li.textContent = organisations[i];
        li.style = "myUL li a";
        li.style.display = "none"
        li.addEventListener("click", setSearchValue);
        ul.appendChild(li);
    }
}

function setSearchValue(){
    var ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('p');
    for (i = organisations.length-1; 0 <= i ; i--) {
        li[i].style.background = "white";
        li[i].style.display = "none";
        
    }
    search.value = this.textContent;

    var ind = organisations.indexOf(search.value);
    div11.textContent = descriptions[ind];

    div10.textContent = search.value;
    this.style.background = "red";
    checkIfValid();
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.background = "white";
    }
    lastButton = null;
}