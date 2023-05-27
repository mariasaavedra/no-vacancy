import { ParentComponentProps } from 'interfaces/ParentComponentProps';

export type HeadingProps = ParentComponentProps;

export default function Heading(props: HeadingProps) {
  return (
    <div>
      <h1 className='text-3xl'>{props.children}</h1>
    </div>
  );
}
