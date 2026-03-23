const container = document.querySelector(".background");

// duplicate once (mandatory)
container.innerHTML += container.innerHTML;

// calculate width AFTER duplication
const totalWidth = container.scrollWidth / 2;

gsap.to(container, {
  x: -totalWidth,
  duration: 80,
  ease: "none",
  repeat: -1
});