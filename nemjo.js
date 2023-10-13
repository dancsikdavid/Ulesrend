// Tanulók és számítógépek adatai
const tanulok = ["Tanulo1", "Tanulo2", "Tanulo3", "Tanulo4", "Tanulo5", "Tanulo6", "Tanulo7", "Tanulo8", "Tanulo9"];
const szamitogepek = ["Szamitogep1", "Szamitogep2", "Szamitogep3"];

// Nevsor lista elem
const nevsorLista = document.getElementById("nevsor-lista");

// Terem elrendezés elem
const teremElrendezes = document.getElementById("terem-elrendezes");

// Tanulók és számítógépek megjelenítése
function megjelenitNevsor() {
    nevsorLista.innerHTML = "";
    tanulok.forEach((tanulo, index) => {
        const nevElem = document.createElement("li");
        nevElem.textContent = tanulo;
        nevElem.setAttribute("draggable", true);
        nevElem.setAttribute("id", `tanulo-${index}`);
        nevElem.addEventListener("dragstart", huzdEjtsd);
        nevsorLista.appendChild(nevElem);
    });
}

function megjelenitTerem() {
    teremElrendezes.innerHTML = "";
    szamitogepek.forEach((szamitogep, index) => {
        const szamitogepElem = document.createElement("div");
        szamitogepElem.textContent = szamitogep;
        szamitogepElem.classList.add("szamitogep");
        szamitogepElem.setAttribute("id", `szamitogep-${index}`);
        szamitogepElem.addEventListener("dragover", megakadalyoz);
        szamitogepElem.addEventListener("drop", ejtsd);
        teremElrendezes.appendChild(szamitogepElem);
    });
}

// Drag and Drop műveletek
function huzdEjtsd(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function megakadalyoz(event) {
    event.preventDefault();
}

function ejtsd(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

// Alkalmazás inicializálása
function inicializalas() {
    megjelenitNevsor();
    megjelenitTerem();
}

// Inicializáció hívása
inicializalas();
