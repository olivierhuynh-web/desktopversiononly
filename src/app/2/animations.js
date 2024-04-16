import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const flashPortrait = (
  pictureRef,
  pageContainerRef,
  imageContainerRef,
  setNumber
) => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    pinSpacer: false,
    // pinSpacing: false,
    pin: pageContainerRef.current,
    trigger: pageContainerRef.current,
    start: 'top top',
    end: 'bottom bottom*1.2',
    onUpdate: (self) => {
      const scrollPosition = self.scroll();
      const totalScrollHeight = self.end - self.start;
      const interval = totalScrollHeight / 8;
      let imageIndex = Math.floor(scrollPosition / interval);
      imageIndex = Math.min(imageIndex, 7);
      const imageUrl = `/portrait/${imageIndex}.jpg`;
      pictureRef.current.src = imageUrl;
      setNumber(imageIndex);

      const x = imageIndex * 100;
      const scale = 0.8 + scrollPosition / totalScrollHeight;

      gsap.to(imageContainerRef.current, {
        x: x,
        scale: scale,
        ease: 'none', // Utilisez 'none' pour un défilement linéaire
      });
    },
  });
};
