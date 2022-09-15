import { atlag, hozzaad } from "./lista.js";

function katt() {
    hozzaad(parseInt(document.getElementById("nInput").value));
    alert(atlag());
}

document.getElementById("gomb").addEventListener('click', katt);

