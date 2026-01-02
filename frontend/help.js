const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const services = document.querySelector(".services");

leftArrow.addEventListener("click", () => {
  services.scrollBy({ left: -200, behavior: 'smooth' });
});

rightArrow.addEventListener("click", () => {
  services.scrollBy({ left: 200, behavior: 'smooth' });
});







