import { MaybeParentComponentProps } from 'interfaces/ParentComponentProps';

import styles from './Button.module.css';

export type ButtonProps = MaybeParentComponentProps;

export default function Button(props: ButtonProps) {
  return (
    <div className={styles.ButtonComponent}>
      <span>{props.children}</span>
    </div>
  );
}
