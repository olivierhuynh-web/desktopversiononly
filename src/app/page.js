'use client';
import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { gsap } from 'gsap';

import Title from './1/title';
import Portrait from './2/portrait';

import NavigationContextProvider from '../contexts/NavigationContext'; // Importez le composant qui enveloppe le contexte
import NavigationContext from '../contexts/NavigationContext'; // Importez le contexte en tant qu'export par défaut
import { useNavigation } from '../contexts/NavigationContext'; // Importez le contexte en tant qu'export par défaut

export default function Home() {
  const { currentComponent } = useNavigation(NavigationContext);
  const [timeline, setTimeline] = useState(null);
  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline();
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>
      <div>
        {currentComponent === 1 && <Title timeline={timeline} />}{' '}
        {currentComponent === 2 && <Portrait timeline={timeline} />}{' '}
      </div>
    </main>
  );
}
