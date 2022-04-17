const linkDescarga = document.querySelector(".descarga");

linkDescarga.addEventListener("click",function(){
    alert("Estas a punto de  ingresar a la pina de descarga")
});

const subir = document.querySelector(".boton-arriba");

subir.addEventListener("click", function(){
    document.documentElement.scrollTop=0;
})
window.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop > 0) {
        subir.style.display="flex"
    }
    else{
        subir.style.display="none"
    }
})