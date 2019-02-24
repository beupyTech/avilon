let query = localStorage.searchQuery
var xmlhttp;

if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

var htmlElems = {
    dataArea: document.getElementById('data')
};

function makeHTML (data){
    htmlElems.dataArea.innerHTML += '<div class="card mb-4">'+
            '<img class="card-img-top" src="'+data.img+'" alt="'+data.name+' image">'+
           ' <div class="card-body">'+
             '<h2 class="card-title" id="title1">'+data.name+'</h2>'+
              '<p class="card-text" id="text1">'+data.small+'</span></p>'+
              '<a href="'+data.link+'" class="btn btn-primary readMore">Open</a>'+
            '</div>'+
          '</div>' ;
}

function matchSearch(res){
    var match = false;
    if(res.length > 0){
        for(let i=0; i<res.length; i++){
            var searchValue = res[i].name.toLowerCase();
            var searchQuery = query.toLowerCase();
            if(searchValue.indexOf(searchQuery) > -1) {
                match = true;
                makeHTML(res[i]);
            }
        }
        if(!match){
            htmlElems.dataArea.innerHTML += '<center style="color:red; margin-bottom: 90%; margin-left:20%;">No Result Found Try Different Search</center>'
        }
    }else{
        console.log("Nothing To search");
    }
}



xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //console.log(this.response);
        var res = JSON.parse(this.response);
        matchSearch(res.data);
    }
};

xmlhttp.open("GET", "/blog/data/blog.json", true);
xmlhttp.send();





