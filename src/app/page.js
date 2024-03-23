'use client';
import { useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import Title from './1/title';

export default function Home() {
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
        <Title timeline={timeline} />
      </div>
    </main>
  );
}
