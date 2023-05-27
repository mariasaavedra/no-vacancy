import Link from 'next/link';

import Button from '@/components/Button/Button';
import FooterLinks from '@/components/FooterLinks/FooterLinks';

export default function Footer() {
  return (
    <footer className='bg-black p-8 text-xl text-white'>
      <FooterLinks />
      <p className='my-4 uppercase tracking-widest'>email: maria@m7studio.co</p>
      <p className='my-4 uppercase tracking-widest'>phone: (816) 945-4147</p>

      <section className='bg-black py-8'>
        <Button>
          <Link
            href='https://mariasaavedra.typeform.com/to/IkPubgrS'
            target='_blank'
          >
            <p className='font-secondary'>CONTACT</p>
          </Link>
        </Button>
      </section>
    </footer>
  );
}
