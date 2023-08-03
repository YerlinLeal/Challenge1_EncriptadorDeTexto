function limpiar() {
    document.getElementById('imagen').style.display = 'flex';
    document.getElementById('textoTitulo').style.display = 'flex';
    document.getElementById('texto').value = "";
    document.getElementById('textoMostrar').textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    document.getElementById("botonCopiar").style.visibility = "hidden";
}

function ocultarElementosDecorativos(){
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('textoTitulo').style.display = 'none';
    document.getElementById("botonCopiar").style.visibility = "visible";
}

function obtenerTexto() {
    var texto = document.getElementById('texto').value;
    ocultarElementosDecorativos();
    return texto;
}

function mostrarTexto(texto) {
    const textoMostrar = document.getElementById('textoMostrar');
    textoMostrar.textContent = texto;
}

function encriptarLetra(letra) {
    var claves = {
        'a' : "ai",
        'e' : "enter",
        'i' : "imes",
        'o' : "ober",
        'u' : "ufat"
    };
    return claves[letra] || letra;
}

function encriptarTexto() {
    var textoIngresado = obtenerTexto();
    var arrayTexto = textoIngresado.split('');
    arrayTexto.forEach((letra, i) => {
        arrayTexto[i] = encriptarLetra(letra);
    });
    mostrarTexto(arrayTexto.join(''));
}

function desencriptarTexto() {
    var textoIngresado = obtenerTexto();
    const claves = {
        ai : "a",
        enter : "e",
        imes : "i",
        ober : "o",
        ufat : "u"
    };
    
    Object.entries(claves).forEach(entry => {
        const [clave, letra] = entry;
        while(textoIngresado.search(clave) != -1) {
            textoIngresado = textoIngresado.replace(clave, letra);
        }
    });
    mostrarTexto(textoIngresado);
}

function copiarTexto() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(document.getElementById('textoMostrar').textContent)
    } else {
        console.error('API Clipboard no soportada.');
    }
}