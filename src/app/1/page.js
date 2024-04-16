'use client';
// import Image from 'next/image';
import styles from './page.module.scss';
import { disappearText } from './animations';
import React, { useRef, useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

export default function Title({ timeline }) {
  const router = useRouter();
  const { handleNextComponent } = useNavigation();
  const text = useRef(null);
  const main = useRef(null);
  const animation = useRef(null);
  k;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Initialiser ScrollTrigger une seule fois
  }, []);

  useGSAP(
    () => {
      animation.current = disappearText(text.current, main.current, () => {
        handleNextComponent({ Number: 2 });
        router.push('/2'); // Naviguer vers une autre page
      });

      if (
        timeline
        // && text.current && main.current && animation.current
      ) {
        console.log(timeline);
        timeline.add(animation.current);
        console.log('ici');
      }

      // return () => {
      //   if (animation.current && animation.current.target) {
      //     animation.current.kill(); // Arrêtez et supprimez l'animation
      //   }
      //   gsap.killTweensOf(animation.current);
      //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Désactivez tous les ScrollTriggers
      // };
    },
    {
      dependencies: [timeline, handleNextComponent],
      revertOnUpdate: true,
    }
  );

  return (
    <div className={styles.main} ref={main}>
      <div className={styles.title} ref={text}>
        <h1>DESKTOP</h1>
      </div>
    </div>
  );
}
