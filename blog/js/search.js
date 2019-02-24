var htmlelements = {
    box: document.getElementById('searchBox'),
    btn: document.getElementById('searchBtn')
}

function dosearch() {
    window.location.href = '/blog/search.html';
}

htmlelements.box.addEventListener('keyup', function(event){ 
console.log(event.keyCode);
    if(event.keyCode === 13){
        event.preventDefault();
        localStorage.clear();
        if(htmlelements.box.value.trim() !== ""){
            localStorage.searchQuery = htmlelements.box.value;
            dosearch();
        }else{
            htmlelements.box.placeholder = "Error! Type Search Term Here";
        }
        
    }
});

htmlelements.btn.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.clear();
    if(htmlelements.box.value.trim !== ""){
        localStorage.searchQuery = htmlelements.box.value;
        dosearch();   
    }
})