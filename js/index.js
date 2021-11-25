

var btnPdf = document.querySelector(".btnPdf");
btnPdf.addEventListener("click", function(){
    
    window.open("Currículo.pdf");

});


var btnflag_usa = document.querySelector(".flag_usa");
btnflag_usa.addEventListener("click", function(){
    
    Mensagem("USA");

});

var btnflag_bra = document.querySelector(".flag_bra");
btnflag_bra.addEventListener("click", function(){
    
     Mensagem("BRA");

});

var btnflag_ita = document.querySelector(".flag_ita");
btnflag_ita.addEventListener("click", function(){
    
     Mensagem('ITA');

});

screenSize();

window.addEventListener('resize', function(event){  
    screenSize();
});

function screenSize(){
    var screenwidth = screen.width;
    if (screenwidth <= 480) {
        var btnPdf = document.querySelector(".btnPdf");
        btnPdf.innerHTML = 'MEU CURRÍCULO';
    }
    if (screenwidth > 480) {
        var btnPdf = document.querySelector(".btnPdf");
        btnPdf.innerHTML = 'MEU CURRÍCULO';
    }
}

