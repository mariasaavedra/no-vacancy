import Link from 'next/link';

import styles from './Schedule.module.css';

import Button from '@/components/Button/Button';

export default function Schedule() {
  return (
    <div className={styles.ScheduleComponent}>
      {/* Schedule */}
      <div className='mx-auto bg-white px-4 py-16 text-center'>
        <p className='font-secondary  my-8 bg-white  px-4 text-xl uppercase text-black'>
          SCHEDULE A CALL WITH US
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
