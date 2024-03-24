// import Image from 'next/image';
import styles from './page.module.scss';
import { disappearText } from './animations';
import React, { useRef, useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

export default function Title({ timeline }) {
  const { handleNextComponent } = useNavigation();
  const text = useRef(null);
  const main = useRef(null);

  useEffect(() => {
    timeline &&
      timeline.add(
        disappearText(
          text.current,
          main.current
          //   () => {
          //   handleNextComponent({ Number: 2 });
          //   console.log('ok');
          // }
        )
      );
  }, [timeline, handleNextComponent]);

  return (
    <main className={styles.main} ref={main}>
      <div className={styles.title} ref={text}>
        <h1>DESKTOP</h1>
      </div>
    </main>
  );
}
