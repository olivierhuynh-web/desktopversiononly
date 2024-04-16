import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const disappearText = (text, main, onComplete) => {
  if (!text || !main) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    text,
    { autoAlpha: 1 },
    {
      autoAlpha: 0,
      scrollTrigger: {
        pin: true,
        trigger: main,
        start: 'top top',
        end: 'bottom center',
        scrub: 1,
        markers: true,
        onEnter: () => {
          console.log('onEnter : Animation activée');
        },
        onScrubComplete: () => {
          console.log('onScrumComplete : Animation terminée');
          if (document.body.contains(text)) {
            onComplete();
          }
        },
      },
    }
  );
};
// return timeline;
