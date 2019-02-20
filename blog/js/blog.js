window.onload = function(e){
    var extend = document.getElementsByClassName('extend');
    var readMore = document.getElementsByClassName('readMore');
    for(let i= 0; i<extend.length; i++){
        extend[i].style.display = 'none';
        readMore[i].addEventListener('click', function(e){
           e.preventDefault();
            if(this.innerText === 'Read More'){
                this.innerText = 'Minimize';
                extend[i].style.display = 'block';
            }else{
                this.innerText = 'Read More';
                extend[i].style.display = 'none';
            }
           
        });
    }
}