const texte = "Owen Jacques Auguste Ndecky";
const titre = document.getElementById("titre");

let index = 0;

function ecrire() {
  if (index < texte.length) {
    titre.textContent += texte.charAt(index);
    index++;
    setTimeout(ecrire, 100);
  }
}
ecrire();
