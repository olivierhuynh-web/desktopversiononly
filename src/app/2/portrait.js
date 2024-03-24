import Image from 'next/image';
// import styles from './page.module.scss';
import React, { useRef, useEffect } from 'react';
import { rotatePortrait } from './animations';

export default function Portrait({ timeline }) {
  const picture = useRef(null);

  useEffect(() => {
    timeline && timeline.add(rotatePortrait(picture.current));
  }, [timeline]);
  return (
    <main
    // className={styles.main} ref={main}
    >
      <Image
        src='https://picsum.photos/500/300/?image=10'
        width={500}
        height={300}
        alt='Picture of the author'
        // className={styles.card_image}
        ref={picture}
      />{' '}
    </main>
  );
}
