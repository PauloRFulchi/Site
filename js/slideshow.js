
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";


  //Ajusta o titulo do slide
  if (slideIndex == 1){
    var slidestitle = document.querySelector(".mySlides-title");
    slidestitle.innerHTML = '| Quem sou';   
    document.querySelector(".mySlides-title").style.color = "#0A66C2";
  }else if (slideIndex == 2){
    var slidestitle = document.querySelector(".mySlides-title");
    slidestitle.innerHTML = '| Formação';
    document.querySelector(".mySlides-title").style.color = "#FD9500";

  }else if (slideIndex == 3){
    var slidestitle = document.querySelector(".mySlides-title");
    slidestitle.innerHTML = '| Experiência';    
    document.querySelector(".mySlides-title").style.color = "#DF3143";

  }
}

var prev = document.querySelector(".prev");
prev.addEventListener("click", function(){
    
     plusSlides(-1);

});

var next = document.querySelector(".next");
next.addEventListener("click", function(){
    
     plusSlides(1);

});


//Click nos dot parte inferior
var dot1 = document.querySelector("#dot1");
dot1.addEventListener("click", function(){
    
     currentSlide(1);

});

var dot2 = document.querySelector("#dot2");
dot2.addEventListener("click", function(){
    
     currentSlide(2);

});

var dot3 = document.querySelector("#dot3");
dot3.addEventListener("click", function(){
    
     currentSlide(3);

});


//troca de slide pelo mobile touch
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;


var mySlides = document.querySelector(".slideshow-container");

mySlides.addEventListener("touchstart", function(){
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

mySlides.addEventListener("touchend", function(){
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    
    if (touchendX <= touchstartX) {
        console.log('Swiped left');        
        plusSlides(1);
    }
    
    if (touchendX >= touchstartX) {
        console.log('Swiped right');
        plusSlides(-1);           
    } 
    
}
