'use client';
import React, { useRef, useEffect, useState } from 'react';
import { flashPortrait } from './animations';
import styles from './page.module.scss';
import Image from 'next/image';

export default function Portrait({ timeline }) {
  const pictureRef = useRef(null);
  const pageContainerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    flashPortrait(pictureRef, pageContainerRef, imageContainerRef, setNumber);
  }, []);

  return (
    <div className={styles.pageContainer} ref={pageContainerRef}>
      <div className={styles.imageContainer} ref={imageContainerRef}>
        <Image
          src={`/portrait/${number}.jpg`}
          width={500}
          height={300}
          alt='Portrait'
          ref={pictureRef}
          priority
        />
        <div className={styles.numberOverlay}>{number}</div>
      </div>
    </div>
  );
}
