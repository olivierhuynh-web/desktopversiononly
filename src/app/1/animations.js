import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const disappearText = (text, main) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    text,
    { autoAlpha: 1 },
    {
      autoAlpha: 0,
      // color: 'green',
      // backgroundColor: 'black',
      scrollTrigger: {
        pin: true, // pin the trigger element while active
        trigger: main,
        start: 'top top', // Commence l'animation lorsque le haut de l'élément principal atteint le centre de la fenêtre
        // end: 'bottom top', // Termine l'animation lorsque le bas de l'élément principal atteint le centre de la fenêtre
        scrub: 0.1,
        markers: true,
        onEnter: () => {
          console.log('Animation activée');
        },
        onLeave: () => {
          console.log('Animation désactivée');
        },
      },
    }
  );
};
