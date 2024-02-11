function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");


    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if(texto.length != 0 ){
        texto = textoEncriptado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = textoEncriptado;
/*         document.getElementById("muñeco").style.display = "none"; */
        muñeco.src = "./img/encriptado.png"; 
        botonCopiar.addEventListener("click", copiar = () => {
        let contenido = document.getElementById("parrafo").textContent;
        navigator.clipboard.writeText(contenido);})
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length != 0){
        texto = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = textoDesencriptado;
        muñeco.src = "./img/desencriptado.png";
        let botonCopiar = document.querySelector(".btn-copiar"); 
        botonCopiar.addEventListener("click", copiar = () => {
        let contenido = document.getElementById("parrafo").textContent;
        navigator.clipboard.writeText(contenido);})
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto"); 
    }

    
}
