// import Image from 'next/image';
import styles from './page.module.scss';
import { disappearText } from './animations';
import React, { useRef, useEffect } from 'react';

export default function Title({ timeline }) {
  const text = useRef(null);
  const main = useRef(null);

  useEffect(() => {
    timeline && timeline.add(disappearText(text.current, main.current));
  }, [timeline]);
  return (
    <main className={styles.main} ref={main}>
      <div className={styles.title} ref={text}>
        <h1>DESKTOP</h1>
      </div>
    </main>
  );
}
