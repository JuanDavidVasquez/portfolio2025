export const headerAnimation = () => {
    const headerTittle = document.querySelector('#headerTittle');
    const headerText = document.querySelector('#headerText');

    const tl = gsap.timeline();

    tl.from(headerTittle, {
        y: -400,
        opacity: 0,
        duration: 2,
        ease: 'power4.out'
    }).from(headerText, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    }, '-=0.5');
};

export const animationServices = () => {
    const services = document.querySelectorAll('.service');

    services.forEach((service, index) => {
        // Animación general para cada elemento
        gsap.from(service, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: service,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse',
                markers: true
            }
        });

        const image = service.querySelector('img');
        
        //par o impar
        if (image) {
            gsap.from(image, {
                x: index % 2 === 0 ? -200 : 200, // Izquierda para par, derecha para impar
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: service,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse'
                }
            });
        }
    });
};
