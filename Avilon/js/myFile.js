var body = document.getElementsByTagName("body")[0];
var xhttp;
var redirectToForum;
var orderData;
var productObj;
var createFunction = function(pName, dom, src) {
    //creating xhttp variable;
    if (window.XMLHttpRequest) {
    // code for modern browsers
        xhttp = new XMLHttpRequest();
     } else {
        // code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    //pName means path name .
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           //testedconsole.log("Got File");
            //console.log();
               dom.innerHTML = "";
               dom.innerHTML = this.response; 
               scriptPut(src);

        }
  }
  xhttp.open("GET", pName, true);
  xhttp.send();
}
var createServerGet = function(method, url,  callback) {
    //creating xhttp variable;
    if (window.XMLHttpRequest) {
    // code for modern browsers
        xhttp = new XMLHttpRequest();
     } else {
        // code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    //pName means path name .
     xhttp.onreadystatechange= function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.response);
        }
  };
  xhttp.open(method, url, true);
  xhttp.send();
}

var scriptPut = function(src) {
    var srcElement = document.createElement("script");
    srcElement.src = src;
    srcElement.classList.add("extendSrc");
    body.appendChild(srcElement)
}


$(document).ready(function(){
    //self calling function creating packages and assign button activity
    (function(){
        var package = [];
        var buyBtn  = document.getElementsByClassName('get-started-btn');
        for(let i= 0; i<buyBtn.length; i++){
            buyBtn[i].addEventListener('click', function(e){
               e.preventDefault();
                localStorage.clear();
                orderData = {};
                orderData.price = this.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
                orderData.pills = this.previousSibling.previousSibling.childNodes[1].textContent;
                orderData.shipping = this.previousSibling.previousSibling.childNodes[3].textContent;
                orderData.mg = this.previousSibling.previousSibling.childNodes[5].textContent;
                orderData.product = this.previousSibling.previousSibling.childNodes[7].textContent;
                
                localStorage.selectedProduct = JSON.stringify(orderData);
                redirectToForum = true;
                createFunction('./buy.html', body, './js/buyMain.js');
            });
        }; //for loop close
 })(); // self invoking function close
    
    function getElements(value){
        var productItem = {
            productName: document.getElementsByClassName('productName'),
            productPrice: document.getElementsByClassName('productPrice'),
            productPill: document.getElementsByClassName('productPill'),
            productShipping: document.getElementsByClassName('productShipping'),
            productMg: document.getElementsByClassName("productMg"),
            product: document.getElementsByClassName('product')
        };
        productObj=[];
        for(productDesc in productItem){
            let descriptor = productItem[productDesc];
            for(let i=0; i<descriptor.length; i++){
                if(productObj[i]){
                    productObj[i][productDesc] = descriptor[i].innerText;
                }else{
                    productObj[i] = {};
                    productObj[i]['id'] = i;
                    productObj[i][productDesc] = descriptor[i].innerText;
                };
            };
        };
        return true;
    };
//    getElements(); // run server to create or match updated element with server schema
//    serverRequest('http://localhost:3000/getSchema', productObj);
function matchData(data){
        let proObj = data;
        var productItem = {
        productName: document.getElementsByClassName('productName'),
        productPrice: document.getElementsByClassName('productPrice'),
        productPill: document.getElementsByClassName('productPill'),
        productShipping: document.getElementsByClassName('productShipping'),
        productMg: document.getElementsByClassName("productMg"),
        product: document.getElementsByClassName('product')
    };
    for(productDesc in productItem){
        let descriptor = productItem[productDesc];
        for(let i=0; i<descriptor.length; i++){
            if(proObj[i]){
                descriptor[i].innerText = proObj[i][productDesc];
            };
        };
    };
        
};
    
    createServerGet('get', 'https://theillfree2019.openode.io/getProduct', function(res){
        let getBackData = JSON.parse(res);
        matchData(getBackData);
    });
    
}); // document ready function close