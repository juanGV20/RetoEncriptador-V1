
const campo_texto = document.querySelector('#textoUsuario');
const campo_mensaje = document.querySelector('#textoResultado');

const matriz_code = [
    ["e","enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {
    let texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    //demoVisibility();
}

function btnDesencriptar(){
    let texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function btncopiar(){
    let texto = campo_texto.value;

    if (texto !== ""){
        campo_mensaje.select();
        //Se utiliza el metodo execCommand para copiar texto en el porta papeles, pero es un metodo que no se usa mucho en los nuevos navegadores
        document.execCommand('copy');
        //Utiliza la API de Clipboard para copiar el texto al portapapeles de una manera más moderna y segura.
        navigator.clipboard.writeText(campo_mensaje.value);
        alert("Texto copiado");
    }else{
        alert("No hay nada que pueda copiar.");
    }
    
}
/* Ocultar elementos
function demoVisibility() {
    document.getElementById("imagen-niño").style.visibility = "hidden";
  }
*/ 
function desencriptar(fraseDesencriptada){
    for  (let i=0; i < matriz_code.length; i++){
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(matriz_code[i][1], matriz_code[i][0]);
        }
    }
    return fraseDesencriptada;
}

function encriptar(fraseEncriptada){
    for (let i=0 ; i < matriz_code.length ; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
           fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0],matriz_code[i][1]);
        }
    }
    return fraseEncriptada;
}
