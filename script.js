/* affichage du menu version mobile*/
function menuFunction() {
    
    var nav = document.getElementById('menu');
    
    if(nav.className === 'menu') {
        nav.className += ' mobile';
    }
    else {
        nav.className = 'menu';
    }
    
}


/*Gallery slideshow*/
var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex=n)
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('myslide')
    var dots = document.getElementsByClassName('dot')
    if (n>slides.length){slideIndex=1}
    if (n<1){slideIndex = slides.length}
    
    /*
    
    slides[slideIndex-2].className +=' oldSlide';
    slides[slideIndex-1].className +=' newSlide';*/
    
    
    for (i=0 ; i<slides.length ; i++){

        slides[i].className = 'myslide';
    }
    
    for (i=0; i<dots.length ; i++){
        dots[i].className = dots[i].className.replace(' active', '')
    }
    

    slides[slideIndex-1].className+=' image-active'; 
    dots[slideIndex-1].className += ' active';
    
}



