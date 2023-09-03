'use strict';


const links = document.querySelectorAll('a');
links.forEach((link) => {
    link.textContent = link.textContent.toUpperCase();
});

let screenSize = () => {
    let screenWidth = window.innerWidth,
        screenHeight = window.innerHeight;
    const screenSizeOutput = document.querySelector('.width');

    screenSizeOutput.innerHTML = `<p>width = ${screenWidth}px</p>
                                  <p>height = ${screenHeight}px</p>
    `
}

screenSize();
window.addEventListener('resize', screenSize);

window.onload = function () {
    Particles.init({
        selector: '.background',
        color: '#ae5a0b',
        connectParticles: true,
        maxParticles: 100,
        speed: 0.3,
        sizeVariations: 5,

        responsive: [
            {
                breakpoint: 1023,
                options: {
                    maxParticles: 50,
                    connectParticles: true,
                    speed: 0.5,
                    sizeVariations: 5,
                }
            },
            // {
            //     breakpoint: 425,
            //     options: {
            //         maxParticles: 30,
            //         connectParticles: false,
            //         speed: 0.8,
            //     }
            // }
        ]
    });
};
