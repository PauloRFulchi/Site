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

/*var mySlides = document.querySelector(".mySlides");
mySlides.addEventListener('swiped-left', function(e) {
    console.log(e.target); // the element that was swiped    
    Mensagem('left');
});*/

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.querySelector(".mySlides");

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    if (touchendX <= touchstartX) {
        console.log('Swiped left');
        Mensagem('left');
    }
    
    if (touchendX >= touchstartX) {
        console.log('Swiped right');
        Mensagem('right');
    }
    
    if (touchendY <= touchstartY) {
        console.log('Swiped up');
        Mensagem('up');
    }
    
    if (touchendY >= touchstartY) {
        console.log('Swiped down');
        Mensagem('down');
    }
    
    if (touchendY === touchstartY) {
        console.log('Tap');
        Mensagem('Tap');
    }
}
