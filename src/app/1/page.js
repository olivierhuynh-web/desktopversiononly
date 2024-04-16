// import Image from 'next/image';
import styles from './page.module.scss';
import { disappearText } from './animations';
import React, { useRef, useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
export default function Title({ timeline }) {
  const { handleNextComponent } = useNavigation();
  const text = useRef(null);
  const main = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Initialiser ScrollTrigger une seule fois
  }, []);

  useEffect(() => {
    animation.current = disappearText(text.current, main.current, () => {
      handleNextComponent({ Number: 2 });
      console.log('Animation terminée');
    });

    timeline && timeline.add(animation.current);

    return () => {
      if (animation.current && animation.current.target) {
        const parentElement = animation.current.target.parentElement;
        // text.current = null;
        // main.current = null;
        // animation.current = null;
        // if (parentElement) {
        //   parentElement.removeChild(animation.current.target); // Supprimez l'élément du DOM s'il existe dans son parent
        // }

        animation.current.kill(); // Arrêtez et supprimez l'animation
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Désactivez tous les ScrollTriggers
    };
  }, [timeline, handleNextComponent]);

  return (
    <div className={styles.main} ref={main}>
      <div className={styles.title} ref={text}>
        <h1>DESKTOP</h1>
      </div>
    </div>
  );
}
