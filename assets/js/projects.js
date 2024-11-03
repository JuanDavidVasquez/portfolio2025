export const animationBackgroundProjects = () => {
    // Array de imágenes de fondo para cada proyecto
    const backgroundImages = [
        './assets/img/projects/time.jpg', 
        './assets/img/projects/qa.jpg', 
        './assets/img/projects/inventario.jpg',
        './assets/img/projects/rrhh.jpg', 
        './assets/img/projects/tareas.webp', 
        './assets/img/projects/adoption.jpeg', 
        './assets/img/projects/landin.webp'
    ];

    const projectBackgrounds = document.querySelectorAll('.backgroundProject');

    const setBackgroundStyles = (backgroundDiv, index) => {
        if (index < backgroundImages.length) {
            backgroundDiv.style.backgroundImage = `url(${backgroundImages[index]})`;
            backgroundDiv.style.width = '100%';
            backgroundDiv.style.height = '425px';
            backgroundDiv.style.backgroundSize = '425px';
            backgroundDiv.style.backgroundPosition = 'center';
            backgroundDiv.style.backgroundRepeat = 'no-repeat';
        } else {
            backgroundDiv.style.backgroundImage = 'none';
            backgroundDiv.style.width = '';
            backgroundDiv.style.height = '';
            backgroundDiv.style.backgroundSize = '';
            backgroundDiv.style.backgroundPosition = '';
            backgroundDiv.style.backgroundRepeat = '';
        }
    };

    const applyBackgroundImages = () => {
        const isWideScreen = window.innerWidth > 970;
        projectBackgrounds.forEach((backgroundDiv, index) => {
            if (isWideScreen) {
                setBackgroundStyles(backgroundDiv, index);
            } else {
                setBackgroundStyles(backgroundDiv);
            }
        });

        if (isWideScreen) {
            window.addEventListener('scroll', applyParallaxEffect);
        } else {
            window.removeEventListener('scroll', applyParallaxEffect);
        }
    };

    const applyParallaxEffect = () => {
        projectBackgrounds.forEach(backgroundDiv => {
            const rect = backgroundDiv.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offsetTop = rect.top + scrollTop;
            const parallax = (scrollTop - offsetTop) * 0.7;
            backgroundDiv.style.backgroundPositionY = `${parallax}px`;
        });
    };

    // Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
    window.addEventListener('load', applyBackgroundImages);
    window.addEventListener('resize', applyBackgroundImages);
};

const setInitialLogoProperties = (logos) => {
    logos.forEach(logo => {
        gsap.set(logo, { y: 100, opacity: 0 });
    });
};

const createAnimationTimeline = (project, logos) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: project,
            start: "top 10%",
            end: "bottom 1%",
            toggleActions: 'play reverse play reverse',
            markers: true,
        }
    });

    logos.forEach((logo, index) => {
        tl.to(logo, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power4.out"
        });
    });
};

export const animationLogosProjects = () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const logosTecnologias = project.querySelectorAll('.logosTecnologias img');

        setInitialLogoProperties(logosTecnologias);
        createAnimationTimeline(project, logosTecnologias);
    });
};