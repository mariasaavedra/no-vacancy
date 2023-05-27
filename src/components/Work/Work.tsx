import Link from 'next/link';

import styles from './Work.module.css';

import Button from '@/components/Button/Button';
import SquiggleIcon from '@/components/SquiggleIcon/SquiggleIcon';

export default function Work() {
  return (
    <div className={styles.WorkComponent + ' relative'}>
      {/* Work */}
      <div className='mx-auto bg-black px-4 py-16 text-center'>
        <SquiggleIcon />
        <p className='font-primary  my-8  px-4 text-5xl uppercase text-white'>
          CASE STUDIES
        </p>
        <div className='mx-auto flex justify-center text-center'>
          <Button>
            <Link
              href='https://www.figma.com/proto/3l1CWDVlEHYvyfXbULUVdn/Projects-(Community)?page-id=0%3A1&type=design&node-id=2-4&viewport=300%2C1010%2C0.19&scaling=scale-down'
              target='_blank'
            >
              <p className='font-secondary'>VIEW WORK</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
