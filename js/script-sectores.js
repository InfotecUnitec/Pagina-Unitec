const src = [
  "logo-late.png",
  "logo-edetec.png",
  "logo-tecnicas3d.png",
  "logo-mecatronica.png",
  "logo-labtic.png",
  "logo-infotec.png",
];
const cards = [
  "Late",
  "EDETEC y Proyecto Arduino",
  "Técnicas 3D",
  "Mecatrónica",
  "LabTIC",
  "InfoTEC",
];
const descripciones = [
  "Laboratorio de asistencia Técnica a establecimientos de educación Especial.",
  "Espacio de desarrollo de rampas tecnológicas para la accesibilidad e inclusión de PcD",
  "Este espacio cuenta con 2 Impresoras 3D: una Prusa i3 y una Makerbot replicador mini; un Scanner 3D y un CNC",
  "En este espacio se desarrolla fundamentalmente trabajos bajo ARDUINO, en lo referente a automatización del hogar ",
  "Laboratorio de desarrollo de Hardware y Software con orientación al uso de TIC`s..",
  "Espacio de extensión dedicado al desarrollo de software",
];
const cardsContainer = document.querySelector(".carrousel-items");
let actualCard = 0;

const templateCard = (label, id, src, descripcion) => {
  return `<div class="carrousel-item">
  <img src="./src/img/logo/${src}" />
  <div class="info-card">
  <h3>${label}</h3>
  <div class="info-container">
  <p class="Informacion">
  ${descripcion}
  </p>
  </div>
  </div>
  <div class="click-area" data-card="${id}"></div>
  </div>`;
};

// cargamos todas las tajetas
cards.forEach((cardLabel, i) => {
  console.log(`../img/${src[i]}`);
  cardsContainer.innerHTML += templateCard(
    cardLabel,
    i,
    src[i],
    descripciones[i]
  );
});

const cardsHTML = [...document.querySelectorAll(".carrousel-item")];
console.log(cardsHTML, cardsHTML.length);

// cargamos el estado inicial del carrousel
cardsHTML[0]?.classList.add("center");
cardsHTML[1]?.classList.add("rigth");

cardsContainer.addEventListener("click", (e) => {
  const cardId = e.target.dataset.card * 1;
  // evitamos que se rompa si el usuario da muchos clicks
  if (!cardId && cardId != 0) return;

  cardsHTML.forEach((card, i) => {
    card.classList.remove("center");
    card.classList.remove("left");
    card.classList.remove("rigth");
  });

  cardsHTML[cardId]?.classList.add("center");
  cardsHTML[cardId + 1]?.classList.add("rigth");
  cardsHTML[cardId - 1]?.classList.add("left");
});
