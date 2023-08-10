var wheelContainer;
var spinButton;
var Wtext; // Elementet där resultaten läggs
var enlargeElem; // Elementet som "mer info" visas i.
var timeout = 2.1;
var closeBtn; // Knappen som stänger enlargeElem
var organisations = ["Röda Korset", "Barncancerfonden", "Rädda barnen", "SOS Barnbyar", "Cancerfonden", "Hjärtlungfonden"
    ,"Hjärnfonden"];

var descriptions = ["Vi finns över hela världen för att hjälpa utsatta människor i kriser, krig och naturkatastrofer.", "Barncancerfonden är en ideell organisation, som arbetar med finansiering av barncancerforskning i Sverige.", "Rädda Barnen är en religiöst och partipolitiskt obunden organisation som värnar om barns rättigheter.", "Vi stöttar familjer i utsatthet så att föräldrarna kan ge sina barn en chans att växa och utvecklas.", "Cancerfondens vision är att besegra cancer, att färre personer ska drabbas av cancer och fler ska överleva.", "Hjärt-Lungfonden är en ideell insamlingsorganisation som samlar in och delar ut pengar till hjärt-lungforskning."
    ,"Hjärnfonden är en ideell organisation som samlar in pengar till forskning och information om hjärnan och dess sjukdomar."];

function init(){
    wheelContainer = document.querySelector("#container div");
    spinButton = document.getElementById("spin");
    Wtext = document.getElementById("wheelText");
    enlargeElem = document.getElementById("enlarge");
    closeBtn = document.getElementById("closeEnlarge");
    spinButton.addEventListener("click", spinWheel);
}
window.addEventListener("load",init);

function spinWheel(){
    spinButton.disabled = true;
    //sound.play();
    wheelContainer.style.transition = timeout + "s";
    let l = Math.random()*9000; // Väljer ett slumpmässigt nummer som hjulet sedan roterar till, står i grader
    wheelContainer.style.webkitTransform = "rotate(" + l + "deg)";
    setTimeout(() => {
        listResult();
    }, timeout*1000); // *1000 för att omvandla till sekunder
}


function listResult(){
    let ix = Math.floor(Math.random()*organisations.length); // Väljer slumpmässigt ett alternativ i listan val
    let smapiRes = organisations[ix]; // Valda alternativet
    let description = descriptions[ix];
    organisations.splice(ix,1);
    descriptions.splice(ix,1);
    spinButton.disabled = false;
    Wtext.innerHTML = "";
    let res1 = document.createElement("div");
    res1.innerHTML += "<h4>" + description + "</h4>"
    Wtext.insertBefore(res1,Wtext.firstChild);

    let res = document.createElement("div");
    res.innerHTML += "<h2>" + smapiRes + "</h2>"
    Wtext.insertBefore(res,Wtext.firstChild);
    setValue(smapiRes);
}


function setValue(org){
    localStorage.setItem("org", org);
}
