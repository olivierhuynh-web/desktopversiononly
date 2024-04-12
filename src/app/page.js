'use client';
import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

import Title from './1/page';
import Portrait from './2/portrait';

import NavigationContextProvider from '../contexts/NavigationContext'; // Importez le composant qui enveloppe le contexte
import NavigationContext from '../contexts/NavigationContext'; // Importez le contexte en tant qu'export par défaut
import { useNavigation } from '../contexts/NavigationContext'; // Importez le contexte en tant qu'export par défaut

export default function Home() {
  const { currentComponent, handleNextComponent } =
    useNavigation(NavigationContext);
  const [timeline, setTimeline] = useState(null);
  // const useIsomorphicLayoutEffect =
  //   typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  // useIsomorphicLayoutEffect(() => {
  //   let context = gsap.context(() => {
  //     const tl = gsap.timeline();
  //     setTimeline(tl);
  //   });

  //   return () => {
  //     if (timeline) {
  //       timeline.clear(); // Effacer les animations de la timeline
  //       setTimeline(null); // Réinitialiser l'état de la timeline
  //     }
  //   };
  // }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    setTimeline(tl);
  });

  return (
    <main>
      <div>
        <button onClick={() => handleNextComponent(2)}>
          changeCurrentComponent
        </button>
        <div>{currentComponent === 1 && <Title timeline={timeline} />} </div>
        <div>{currentComponent === 2 && <Portrait timeline={timeline} />} </div>
      </div>
    </main>
  );
}
