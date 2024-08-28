function validarTexto(texto) {
    // Expresión regular para detectar mayúsculas y letras con tildes
    const regex = /[A-ZÁÉÍÓÚÑ]/;
    if (regex.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin tildes.");
        return false;
    }
    return true;
}

function encriptar() {
    let texto = document.getElementById('inputText').value;
    if (!validarTexto(texto)) {
        return; 
    }
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById('inputText').value;
    if (!validarTexto(texto)) {
        return; 
    }
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById('outputText');
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}
