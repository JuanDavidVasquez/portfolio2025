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