
var face = document.querySelector(".face");
face.addEventListener("click", function(){    
    
    Site('https://www.facebook.com/paulo.r.furquim/');

});

var linkedin = document.querySelector(".linkedin");
linkedin.addEventListener("click", function(){    
    
    Site('https://www.linkedin.com/in/paulo-ricardo-fulchi-1a562748/');

});

var insta = document.querySelector(".insta");
insta.addEventListener("click", function(){
    
    Site('https://www.instagram.com/paulo.furquim1/');

});


function Site(parSite) {

    var redirectWindow = window.open(parSite, '_blank');
    redirectWindow.location;

}