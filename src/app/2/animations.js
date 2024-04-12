import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const rotatePortrait = (picture) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(picture, {
    scrollTrigger: {
      trigger: picture,
      markers: true,
      start: 'top top', // Démarre l'animation lorsque le haut de l'élément déclencheur atteint le haut de la fenêtre
      end: 'bottom top', // Termine l'animation lorsque le bas de l'élément déclencheur atteint le haut de la fenêtre
      onUpdate: (self) => {
        const scrollPosition = self.scroll();
        const interval = 50;
        const imageIndex = Math.floor(scrollPosition / interval); // Calcul de l'index de l'image en fonction de l'interval
        const imageUrl = `https://picsum.photos/500/300/?image=${imageIndex}`; // URL de l'image à charger
        picture.src = imageUrl; // Mise à jour de l'URL de l'image
      },
    },
  });
};
