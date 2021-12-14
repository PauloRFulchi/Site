var btnPdf = document.querySelector(".btnPdf");
btnPdf.addEventListener("click", function(){
    
    window.open("Currículo.pdf");   

});

/*screenSize();

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
}*/

function Mensagem(par) {
    var x = document.getElementById("snackbar");
    x.innerHTML = par;
    x.className = "show";

    setTimeout(function(){ 
        x.className = x.className.replace("show", ""); 
    }, 3000);
}
