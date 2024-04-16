'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import React, { useRef, useEffect, useState } from 'react';
import { flashPortrait } from './animations';

export default function Portrait({ timeline }) {
  const picture = useRef(null);
  const main = useRef(null);
  const imageContainer = useRef(null);
  const [number, setNumber] = useState(0); // Ajoutez un état pour number

  useEffect(() => {
    timeline &&
      timeline.add(
        flashPortrait(
          picture.current,
          main.current,
          imageContainer.current,
          setNumber
        )
      );
  }, [timeline]);
  return (
    <main className={styles.main} ref={main}>
      <div className={styles.imageContainer} ref={imageContainer}>
        <Image
          src={`/portrait/${number}.jpg`}
          width={500}
          height={300}
          alt='Picture of the author'
          ref={picture}
        />
        <div className={styles.numberOverlay}>{number}</div>
      </div>
    </main>
  );
}
