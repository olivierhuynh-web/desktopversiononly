import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const flashPortrait = (picture, main, imageContainer, setNumber) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(picture, {
    scrollTrigger: {
      pin: true,
      trigger: main,
      markers: true,
      scrub: 1, // Réglez la vitesse de l'animation
      start: 'top top', // Démarre l'animation lorsque le haut de l'élément déclencheur atteint le haut de la fenêtre
      end: 'bottom bottom*1.2', // Termine l'animation lorsque le bas de l'élément déclencheur atteint le haut de la fenêtre
      onUpdate: (self) => {
        const scrollPosition = self.scroll();
        const totalScrollHeight = self.end - self.start;
        const interval = totalScrollHeight / 8;
        let imageIndex = Math.floor(scrollPosition / interval); // Calcul de l'index de l'image en fonction de l'interval
        imageIndex = Math.min(imageIndex, 7); // Assurez-vous que imageIndex ne dépasse pas 7
        const imageUrl = `/portrait/${imageIndex}.jpg`; // URL de l'image à charger
        picture.src = imageUrl; // Mise à jour de l'URL de l'image
        setNumber(imageIndex); // Utilisez setNumber pour mettre à jour number

        // Calcul de la nouvelle coordonnée x
        const x = imageIndex * 100;

        // Calcul de la nouvelle échelle
        const scale = 0.8 + scrollPosition / totalScrollHeight;

        // Mise à jour de la coordonnée x de l'image et de l'échelle
        gsap.to(imageContainer, {
          scale: scale,
          x: x,
          // duration: 0.5,
          ease: 'linear',
        });
      },
    },
  });
};
