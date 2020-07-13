let miImage = document.querySelector("img");
miImage.onclick = function () {
  let misrc = miImage.getAttribute("src");
  if (misrc === "pics/pic.png") {
    miImage.setAttribute("src", "pics/pic1.png");
  } else {
    miImage.setAttribute("src", "pics/pic.png");
  }
};
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
function establecerUsuario() {
  let miNombre = prompt("Por favor, ingrese su nombre.");
  if (!miNombre) {
    establecerUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Chrome es genial, " + miNombre;
  }
}
if (!localStorage.getItem("nombre")) {
  establecerUsuario();
} else {
  let storedName = localStorage.getItem("nombre");
  miTitulo.innerHTML = "Chrome es genial, " + storedName;
}
miBoton.onclick = function () {
  establecerUsuario();
};
