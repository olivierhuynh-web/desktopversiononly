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
        // onToggle: () => {
        //   console.log('onLeave : Animation activée');
        // },
        onScrubComplete: () => {
          console.log('onScrubComplete : Animation terminée');
          onComplete();
        },
        onComplete: () => {
          console.log('onComplete : Animation terminée');
          onComplete();
        },
      },
    }
  );
};
// return timeline;
