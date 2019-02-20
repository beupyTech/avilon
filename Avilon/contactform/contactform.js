var xhr;
var htmlElement = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  subject: document.getElementById('subject'),
  message: document.getElementById('message'),
  sendMessage: document.getElementById('sendMessage'),
  result: document.getElementById('formResult')
};

var serverRequest = function(url, data){
    //fhn2018.fr.openode.io
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if(xhr.status === 200){
            console.log(url);
            if(url === "https://theillfree2019.openode.io/orders"){
                createFunction('./view/finale.html', mainContainer, '');
            }else{
                var deliverData = JSON.parse(this.response);
                htmlElement.result.innerHTML = deliverData.message;
                console.log(this.response);
            }
        }
    };
    var stringifyData = JSON.stringify(data);
    xhr.send(stringifyData);
};

if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
};

var createXmlhttp = function(method, pName, callback) {
  xhttp.onreadystatechange = callback;
  xhttp.open(method, pName, true);
  xhttp.send();
};

createXmlhttp("GET", "https://theillfree2019.openode.io/ping", function(){
    console.log(this.response);
});


htmlElement.sendMessage.addEventListener('click', function(e) {
  e.preventDefault();
  var pushdata = {};
  console.log("Clicked");
  var emailValidation = validateEmail(htmlElement.email.value);
  if(htmlElement.name.value && htmlElement.email.value && htmlElement.subject.value && htmlElement.message.value && emailValidation){
      htmlElement.result.innerHTML = "";
      pushdata.name = htmlElement.name.value;
      pushdata.email = htmlElement.email.value;
      pushdata.subject = htmlElement.subject.value;
      pushdata.message = htmlElement.message.value;
      clearData();
      serverRequest('https://theillfree2019.openode.io/contact', pushdata);
  }else{
    htmlElement.result.innerHTML = "Somevalues are missing or email format is not correct";
  }
});

//Email validation

function validateEmail(email)
{
 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 if (reg.test(email)){
 return true;
}else{
 return false;
 }
}
//clear data
function clearData(){
  htmlElement.name.value = '';
  htmlElement.email.value = '';
  htmlElement.subject.value = '';
  htmlElement.message.value = '';
}
