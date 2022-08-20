var swiper = new Swiper(".mySwiper", {
  pagination: { el: ".swiper-pagination",
                clickable: true },
});
const burgerBtn = document.querySelector(".navbar__burger"),
  burgerModal = document.querySelector(".burger"),
  modalBtn = document.getElementById("modalBtn"),
  modalBtn2 = document.getElementById("modalBtn2"),
  modal = document.querySelector(".modal"),
  modalWrapper = document.querySelector(".modalWraper"),
  body = document.querySelector("body");
  
modalBtn2.addEventListener("click", () => {
  modal.classList.add("active"), body.classList.add("active");
}),
  modalBtn.addEventListener("click", () => {
    modal.classList.add("active"), body.classList.add("active");
  }),
  modalWrapper.addEventListener("click", () => {
    modal.classList.remove("active"), body.classList.remove("active");
  }),
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.add("active"),
      burgerModal.classList.add("active"),
      body.classList.add("active");
  }),
  burgerModal.addEventListener("click", () => {
    burgerBtn.classList.remove("active"),
      burgerModal.classList.remove("active"),
      body.classList.remove("active");
  }),
  ScrollReveal().reveal(".navbar", {
    duration: 2e3,
    origin: "top",
    distance: "30px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".header", {
    duration: 2e3,
    scale: 0.8,
    distance: "30px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".for__content", {
    duration: 2e3,
    origin: "top",
    distance: "50px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".youget", {
    duration: 2e3,
    origin: "bottom",
    distance: "50px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".youget__content--offer", {
    duration: 2e3,
    origin: "bottom",
    distance: "50px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".how", {
    duration: 2e3,
    scale: 0.8,
    distance: "50px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".offer-1", {
    duration: 2e3,
    origin: "bottom",
    distance: "50px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".offer-2", {
    duration: 2e3,
    origin: "top",
    distance: "50px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".tariff", {
    duration: 2e3,
    scale: 0.8,
    distance: "50px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".download", {
    duration: 2e3,
    origin: "top",
    distance: "50px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".partners", {
    duration: 2e3,
    origin: "bottom",
    distance: "50px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".send", {
    duration: 2e3,
    scale: 0.8,
    distance: "30px",
    interval: 16,
    reset: !0,
  }),
  ScrollReveal().reveal(".footer", {
    duration: 1e3,
    origin: "bottom",
    distance: "30px",
    interval: 16,
    reset: !0,
  });
