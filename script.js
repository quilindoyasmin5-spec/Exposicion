let expresion = document.getElementById("expresion");
let resultado = document.getElementById("resultado");
let filtro = document.getElementById("filtro");

expresion.addEventListener("input", function () {
    if (expresion.value == "document.activeElement") {
        resultado.textContent = "main#main-content";
    } else {
        resultado.textContent = expresion.value;
    }
});

document.getElementById("borrar").addEventListener("click", function () {
    expresion.value = "";
    resultado.textContent = "";
});

document.getElementById("live").addEventListener("click", function () {
    resultado.textContent = "main#main-content";
});

document.getElementById("inspeccionar").addEventListener("click", function () {
    resultado.textContent = "main#main-content";
});

filtro.addEventListener("input", function () {
    if (filtro.value != "") {
        resultado.textContent = "Filtrando: " + filtro.value;
    } else {
        resultado.textContent = "main#main-content";
    }
});
