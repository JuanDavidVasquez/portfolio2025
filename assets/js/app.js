import { headerAnimation, animationServices } from "./sectionsAnimation.js";

document.addEventListener("DOMContentLoaded", () => {
  headerAnimation();

  const textElement = document.querySelector(".animated-text");
  

  setTimeout(() => {
    const text = textElement.innerText;
  textElement.innerHTML = ""; 
    // Dividir el texto en letras y envolver cada letra en un span
    text.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.style.animationDelay = `${index * 0.2}s`; // Escalonar el inicio de cada letra
        textElement.appendChild(span);
    });
  }, 2500);
  


  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  animationServices();
});
