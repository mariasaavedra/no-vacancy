import Link from 'next/link';

import styles from './Consulting.module.css';

import Button from '@/components/Button/Button';

export default function Consulting() {
  return (
    <div
      className={
        styles.ConsultingComponent +
        ' flex w-full  flex-col bg-black p-16 md:flex-row'
      }
    >
      {/* Consulting */}

      <div className=' w-full bg-black  text-left'>
        {/* <p className='font-primary font-bolder  mx-auto max-w-4xl  text-5xl uppercase text-white'>
          Are you a solo entrepreneur, a visionary boss, or the daredevil at the
          helm of a corporate behemoth, ready to kick things up a notch?
        </p> */}
        <h1 className='font-secondary  my-8 max-w-4xl   text-sm font-normal uppercase tracking-widest text-white'>
          executive Consulting
        </h1>
        <p className='font-primary font-bolder   max-w-4xl  text-6xl uppercase text-white'>
          Entrepreneur, visionary boss, or daredevil CEO - does that sound like
          you?
        </p>
        <p className='font-secondary  my-8 flex max-w-4xl bg-black   text-2xl font-thin  text-white'>
          Visualize yourself tackling challenges head-on, commanding attention
          amidst the saturated market, and witnessing your business flourish
          phenomenally, defying all expectations.
        </p>
        <p className='font-secondary  my-8 flex max-w-4xl bg-black   text-2xl font-thin  text-white'>
          Now, stop imagining. Let’s make it happen! Kick things up a notch with
          our tailored strategy sessions.
        </p>
        <p className='font-secondary  my-8 flex max-w-4xl bg-black  text-left text-2xl  font-thin   text-white'>
          For a limited time we're giving you the shot to tap into our
          brainpower by the hour, don't wait.
        </p>
        <div className=' flex max-w-fit '>
          <Button>
            <Link
              href='https://www.figma.com/proto/3l1CWDVlEHYvyfXbULUVdn/Projects-(Community)?page-id=0%3A1&type=design&node-id=2-4&viewport=300%2C1010%2C0.19&scaling=scale-down'
              target='_blank'
            >
              <p className='font-secondary font-xs'>BOOK NOW</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
