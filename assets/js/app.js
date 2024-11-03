import {
  animationBackgroundProjects,
  animationLogosProjects,
} from "./projects.js";
import { headerAnimation, animationServices } from "./sectionsAnimation.js";

document.addEventListener("DOMContentLoaded", () => {
  // Ejecutar la animación del encabezado
  headerAnimation();

  // Animar el texto de forma escalonada
  animateText(".animated-text", 2500);

  // Animar secciones al hacer scroll
  animateSections("section");

  // Ejecutar animaciones específicas de servicios, proyectos y logos
  animationServices();
  animationBackgroundProjects();
  animationLogosProjects();
});

// Función para animar el texto de forma escalonada
const animateText = (selector, delay) => {
  const textElement = document.querySelector(selector);
  setTimeout(() => {
    const text = textElement.innerText;
    textElement.innerHTML = "";
    text.split("").forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.animationDelay = `${index * 0.2}s`; // Escalonar el inicio de cada letra
      textElement.appendChild(span);
    });
  }, delay);
};

// Función para animar secciones en el scroll
const animateSections = (selector) => {
  const sections = document.querySelectorAll(selector);
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
};
