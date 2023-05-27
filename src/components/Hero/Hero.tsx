import Image from 'next/image';

import styles from './Hero.module.css';

import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Viewer from '@/components/Viewer/Viewer';

export default function Hero() {
  return (
    <div className={styles.HeroComponent}>
      <div
        className={
          styles.bg +
          ' relative  flex h-[65vh] w-screen overflow-hidden bg-black text-white'
        }
      >
        <Viewer></Viewer>
        <AnimatedText position='bottom' />
        <Image
          className='absolute bottom-20 right-5 z-10 invert md:filter-none'
          src='/images/logo.svg'
          width={120}
          height={120}
          alt=''
        />
      </div>
    </div>
  );
}
