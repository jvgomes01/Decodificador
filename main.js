function criptografar() {
    let textoUsuario = document.getElementById("floatingTextarea1").value;
    let textoCriptografado = textoUsuario
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("mensagem-texto1").textContent = textoCriptografado
    trocarDivs();
};



function descriptografar() {
    let textoUsuario = document.getElementById("floatingTextarea1").value;
    let textoDescriptografado = textoUsuario
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("mensagem-texto1").textContent = textoDescriptografado;
    trocarDivs();
};

function trocarDivs() {
    document.getElementById("myDIV").style.display = "none";
    document.getElementById("mydiv2").style.display = "block";

};

function copiarTexto() {
    let textoCopiado = document.getElementById("mensagem-texto1");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("TEXTO COPIADO")
}

