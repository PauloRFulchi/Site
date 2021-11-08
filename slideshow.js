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