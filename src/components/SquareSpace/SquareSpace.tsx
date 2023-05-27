import styles from './SquareSpace.module.css';

export default function SquareSpace() {
  return (
    <div
      className={styles.SquareSpaceComponent + ' bg-black p-4 py-16 text-white'}
    >
      <h3 className='my-2 mb-10 w-full text-2xl font-thin leading-tight md:w-1/2 md:text-3xl'>
        Squarespace
      </h3>
      <p className='my-2 mb-10 w-full text-2xl font-thin leading-tight md:w-1/2 md:text-3xl'>
        Bespoke-looking, (almost) instant websites that are a breeze to add your
        branding to. Built on Squarespace to save you from yourself.
      </p>
    </div>
  );
}
