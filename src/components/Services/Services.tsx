import styles from './Services.module.css';

import SquiggleIcon from '@/components/SquiggleIcon/SquiggleIcon';

export default function Services() {
  return (
    <div className={styles.ServicesComponent + ' bg-black p-16'}>
      {/* SERVICES */}
      <h1 className='font-secondary my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
        Services
      </h1>
      <div className='font-secondary flex flex-col text-2xl font-thin uppercase leading-loose tracking-widest text-white md:flex-row '>
        <div className='rounded-lg md:w-1/2'>
          <ul>
            <li className='border-b-2'>
              <SquiggleIcon /> E-commerce SOLUTIONS
            </li>
            <li className='border-b-2'>
              <SquiggleIcon />
              SHOPIFY & SQUARESPACE
            </li>
            <li className='border-b-2'>
              <SquiggleIcon />
              THIRD-PARTY INTEGRATIONS
            </li>
            <li className='border-b-2'>
              <SquiggleIcon />
              WebSITE Development
            </li>
            <li className='border-b-2'>
              <SquiggleIcon />
              Custom Software
            </li>
          </ul>
        </div>
        <div className='rounded-lg  md:w-1/2'>
          <ul>
            <li className='border-b-2'>
              <SquiggleIcon />
              Business Strategy
            </li>
            <li className='border-b-2'>
              <SquiggleIcon />
              Content Creation
            </li>
            <li className='border-b-2'>
              <SquiggleIcon />
              Branding
            </li>
            <li className='border-b-2'>
              <SquiggleIcon />
              Marketing
            </li>
            <li className='border-b-2'>
              <SquiggleIcon />
              CONSULTING
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
