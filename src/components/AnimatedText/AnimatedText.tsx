import styles from './AnimatedText.module.css';

import SquiggleIcon from '@/components/SquiggleIcon/SquiggleIcon';

const icon = <SquiggleIcon />;
const display_text = Array(500).fill(<SquiggleIcon />);
const word = (
  <>
    shopify <img height='10px' src='/images/squiggle_1.svg'></img> squarespace
    ecommerce branding
  </>
);

interface AnimatedTextProps {
  position: 'top' | 'bottom';
}

export default function AnimatedText(props: AnimatedTextProps) {
  function getClasses() {
    if (props.position === 'top') {
      return styles.top;
    } else {
      return styles.bottom;
    }
  }

  return (
    <div className={styles.AnimatedTextComponent + ' ' + getClasses()}>
      <div className={styles.wrapper + ' tracking-widest'}>
        {display_text.map((icon, index) => {
          return (
            <div className='inline' key={index}>
              <h3 className='inline'>SHOPIFY</h3>
              <div className='inline'> {icon}</div>
              <h3 className='inline'>E-COMMERCE</h3>
              <div className='inline'> {icon}</div>
              <h3 className='inline'>WEB DESIGN & DEVELOPMENT</h3>
              <div className='inline'> {icon}</div>
              <h3 className='inline'>SQUARESPACE</h3>
              <div className='inline'> {icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
