texto = document.getElementById("texto-a-encriptar").value;
textoEncriptado = texto;
img = document.getElementById("imagen-sin-texto");

document.getElementById("encriptar").onclick = encriptar;
document.getElementById("desencriptar").onclick = desencriptar;
/*/document.getElementById("copiar").addEventListener("click", copiar);/*/
document.getElementById("copiar").onclick = copiar;

//Funcion de Encriptado

function encriptar() {
  recorrido();
  hideImg();
}

function recorrido() {
  texto = document.getElementById("texto-a-encriptar").value;

  textoEncriptado = texto;
  textoEncriptado = textoEncriptado.replaceAll("e", "enter");
  textoEncriptado = textoEncriptado.replaceAll("i", "imes");
  textoEncriptado = textoEncriptado.replaceAll("o", "ober");
  textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
  textoEncriptado = textoEncriptado.replaceAll("a", "ai");

  /*/document.getElementById("resultado").innerHTML = textoEncriptado;/*/
}

function hideImg() {
  if (document.getElementById("texto-a-encriptar").value == "") {
    document.getElementById("div-imagen").style.background = "#DED9E2";
    document.getElementById("div-imagen").innerHTML =
      "Ingrese su texto a encriptar...";
  } else {
    /*/document.getElementById("imagen-sin-texto").style.display = "none";/*/
    img.style.display = "none";
    /*/console.log("hideIMG else. textoEncriptado: " + textoEncriptado);/*/
    document.getElementById("div-imagen").innerHTML =
      textoEncriptado.toLowerCase();
    document.getElementById("div-imagen").style.background = "#DED9E2";
    document.getElementById("div-imagen").style.overflow = "scroll";
  }

  if (screen.width <= 480) {
    document.getElementById("div-imagen").style.height = "50%";
    document.getElementById("div-imagen").style.width = "98%";
    document.getElementById("div-imagen").style.height = "50%";
    document.getElementById("div-imagen").style.padding = "6px 6px";
    document.getElementById("div-imagen").style.marginTop = "-140px";
    document.getElementById("div-imagen").style.marginRight = "auto";
    document.getElementById("div-imagen").style.marginLeft = "auto";

    document.getElementById("div-regla").style.marginTop = "-350px";
  }
}

//Funcion de Desencriptado

function desencriptar() {
  if (document.getElementById("texto-a-encriptar").value == "") {
    document.getElementById("div-imagen").style.background = "#DED9E2";
    document.getElementById("div-imagen").innerHTML =
      "Ingrese su texto a encriptar...";
  } else {
    textoDesencriptado = document.getElementById("texto-a-encriptar").value;
    textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");

    img.style.display = "none";
    document.getElementById("div-imagen").innerHTML = textoDesencriptado;
    document.getElementById("div-imagen").style.background = "#DED9E2";
  }

  if (screen.width <= 480) {
    document.getElementById("div-imagen").style.height = "50%";
    document.getElementById("div-imagen").style.width = "98%";
    document.getElementById("div-imagen").style.height = "50%";
    document.getElementById("div-imagen").style.padding = "6px 6px";
    document.getElementById("div-imagen").style.marginTop = "-140px";
    document.getElementById("div-imagen").style.marginRight = "auto";
    document.getElementById("div-imagen").style.marginLeft = "auto";

    document.getElementById("div-regla").style.marginTop = "-350px";
  }
}

//Funcion de copiado

function copiar() {
  let textoACopiar = document.getElementById("div-imagen");
  /*/alert("Se ha copiado: \"" + textoACopiar.value + "\"");/*/
  textoACopiar.select();
  navigator.clipboard.writeText(textoACopiar.innerHTML);
  alert('Se ha copiado: "' + textoACopiar.innerHTML + '"');
}
