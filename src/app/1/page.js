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
  const animation = useRef(null); // Ajoutez cette ligne

  // useEffect(() => {
  //   timeline &&
  //     timeline.add(
  //       disappearText(text.current, main.current, () => {
  //         handleNextComponent({ Number: 2 });
  //         console.log('test');
  //       })
  //     );
  // }, [timeline, handleNextComponent]);

  // useGSAP(() => {
  //   timeline &&
  //     timeline.add(
  //       disappearText(text.current, main.current, () => {
  //         handleNextComponent({ Number: 2 });
  //         console.log('test');
  //       })
  //     );
  // }, [timeline, handleNextComponent]);

  useLayoutEffect(() => {
    animation.current = disappearText(text.current, main.current, () => {
      handleNextComponent({ Number: 2 });
      console.log('test');
    });

    timeline && timeline.add(animation.current);

    // Fonction de nettoyage
    return () => {
      // Tuer l'animation
      animation.current && animation.current.kill();
      ScrollTrigger.getAll().forEach((ST) => ST.disable());
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
