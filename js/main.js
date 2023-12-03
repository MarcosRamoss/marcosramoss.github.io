// Ativar link da pagina
const links = document.querySelectorAll("#menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    console.log(link);
    link.classList.add("active");
  }
}
links.forEach(ativarLink);

// Ativar botão menu hamburger
const btnMenu = document.querySelector("#btn-mobile");
function toggleMenu(e) {
  if (e.type === "touchstart") e.preventDefatul();
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  e.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    e.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    e.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
  if (nav.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

function fixarMenu() {
  let header = document.querySelector("#header");
  header.classList.toggle("fixar", window.scrollY > 0);
}
function ajustarMenu() {
  const menuMobile = document.querySelector("#menu");
  menuMobile.classList.toggle("ajustar", window.scrollY > 0);
}
window.addEventListener("scroll", fixarMenu);
window.addEventListener("scroll", ajustarMenu);
