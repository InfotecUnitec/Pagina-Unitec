window.addEventListener("scroll", (e) => {
  document.querySelector("nav").style.backgroundColor = "#285467";
  document.querySelector("nav ul .btn button").style.backgroundColor =
    "#eceff1";

  //   console.log(window.scrollY);
  document.querySelector("nav").classList.add("go-top");
  if (window.scrollY > window.innerHeight - 58) {
    document.querySelector("nav").classList.remove("go-top");
  }
});

[...document.querySelectorAll("section")].forEach((sec) => {
  sec.style.height = window.innerHeight + "px";
  console.log(sec);
});

console.log(window.innerHeight);
let sectionActual = 2;

window.addEventListener("mousemove", (e) => {
  if (window.scrollY < window.innerHeight) {
    document.querySelector("nav").classList.add("go-top");
  }
  if (e.screenY < 170 && window.scrollY < window.innerHeight) {
    document.querySelector("nav").classList.remove("go-top");
    document.querySelector("nav").style.backgroundColor = "#00000011";
    console.log(document.querySelector("nav ul .btn"));
    document.querySelector("nav ul .btn button").style.backgroundColor =
      "#00000011";
  }
});

const button = document.querySelector(".go-down");
button.addEventListener("click", (e) => {
  console.log("aaaa");

  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
  document.querySelector("nav").classList.add("go-top");
  if (window.scrollY > window.innerHeight) {
    document.querySelector("nav").classList.remove("go-top");
  }
});

const scrolear = document.querySelector(".btn-contact");
scrolear.addEventListener("click", (e) => {
  console.log("bbb");

  window.scrollTo({
    top: window.innerHeight * 4,
    behavior: "smooth",
  });
});

//script map
const mapa = document.querySelector("map");

let map = L.map("map").setView([-34.90679000781888, -57.94290231798726], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let LabUnitec = L.icon({
  iconUrl: "./src/img/logo/Logo Unitec.png",

  iconSize: [35, 35], // size of the icon
  iconAnchor: [30, 30], // point of the icon which will correspond to marker's location
  popupAnchor: [-15, -35], // point from which the popup should open relative to the iconAnchor
});

L.marker([-34.90679000781888, -57.94290231798726], { icon: LabUnitec })
  .addTo(map)
  .bindPopup("Laboratorio Principal")
  .openPopup();
