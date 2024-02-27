var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var entradaTexto = document.querySelector(".texto-modificar");
var salidaTexto = document.querySelector(".salidaTexto");
var noTexto = true;

var letrasMinusculas = /[a-z\s]{0,40}/;

btnEncriptar.onclick = Encriptar;
btnDesencriptar.onclick = Desencriptar;

function Encriptar(){
    var cajaTexto = RecuperarTexto()
    salidaTexto.style.color = "black";
    salidaTexto.textContent = EncriptarTexto(cajaTexto);
}
function Desencriptar(){
    var cajaTexto = RecuperarTexto()
    salidaTexto.style.color = "black";
    salidaTexto.textContent = DesencriptarTexto(cajaTexto);
}

function RecuperarTexto(){
    var cajaTexto = document.querySelector(".entradaTexto")
    return cajaTexto.value;
}

function EncriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    
    if(texto==""){
        salidaTexto.style.color = "red";
        textoFinal="PRIMERO INGRESA UN TEXTO PARA ENCRIPTAR";
        noTexto=true;
    }
    else{
        noTexto = false;
        for(var i=0; i<texto.length; i++){
            if(texto[i]=="a"){
                textoFinal=textoFinal+"ai"
            }
            else if(texto[i]=="e"){
                textoFinal=textoFinal+"enter"
            }
            else if(texto[i]=="i"){
                textoFinal=textoFinal+"iems"
            }
            else if(texto[i]=="o"){
                textoFinal=textoFinal+"ober"
            }
            else if(texto[i]=="u"){
                textoFinal=textoFinal+"ufat"
            }
            else{
                textoFinal=textoFinal+texto[i]
            }
        }
    }
    return textoFinal;
}
function DesencriptarTexto(mensaje){
    var texto=mensaje;
    var textoFinal="";

    if(texto==""){
        salidaTexto.style.color = "red";
        textoFinal="PRIMERO INGRESA UN TEXTO PARA DESENCRIPTAR"
        noTexto=true;
    }
    else{
        noTexto = false;
        for(var i=0; i<texto.length; i++){
            if(texto[i]=="a"){
                textoFinal=textoFinal+"a"
                i=i+1;
            }
            else if(texto[i]=="e"){
                textoFinal=textoFinal+"e"
                i=i+4;
            }
            else if(texto[i]=="i"){
                textoFinal=textoFinal+"i"
                i=i+3;
            }
            else if(texto[i]=="o"){
                textoFinal=textoFinal+"o"
                i=i+3;
            }
            else if(texto[i]=="u"){
                textoFinal=textoFinal+"u"
                i=i+3;
            }
            else{
                textoFinal=textoFinal+texto[i];
            }
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".copiar");
btnCopiar.addEventListener("click", copiar=()=>{
    if(noTexto == true){
        salidaTexto.textContent = "NO HAY TEXTO QUE COPIAR"
        var cambioColorTexto = document.querySelector(".salidaTexto");
        cambioColorTexto.style.color = "red";
    }
    else{
        var contenido=document.querySelector(".salidaTexto").textContent;
        navigator.clipboard.writeText(contenido);
    }
})

var texto = document.getElementById('idTextarea').value;