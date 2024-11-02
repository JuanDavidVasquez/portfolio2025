import { headerAnimation } from "./sectionsAnimation.js";

document.addEventListener('DOMContentLoaded', () => {
    headerAnimation();

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                toggleActions: 'play reverse play reverse'
            }
        });
    });
});