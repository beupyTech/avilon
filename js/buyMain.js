var body = document.getElementsByTagName("body")[0];
var xhttp;
var mainContainer = document.getElementById('contentBuy');
var createFunction = function(pName, dom, src) {
    //creating xhttp variable;
    if (window.XMLHttpRequest) {
    // code for modern browsers
        xhttp = new XMLHttpRequest();
     } else {
        // code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    };
    
    //pName means path name .
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           //testedconsole.log("Got File");
            //console.log();
            if(pName === "./view/formAddress.html"){
               dom.innerHTML = "";
               dom.innerHTML = this.response; 
               scriptPut(src);
            }else{
                dom.innerHTML = '';
                dom.innerHTML = this.response;
                scriptPut(src);
            }

        }
  };
  xhttp.open("GET", pName, true);
  xhttp.send();
};

var scriptPut = function(src) {
    var srcElement = document.createElement("script");
    srcElement.src = src;
    srcElement.classList.add("extendSrc");
    body.appendChild(srcElement)
};

if(redirectToForum){
    redirectToForum = false;
    createFunction("../view/formAddress.html",mainContainer,'../js/formAddress.js');
};