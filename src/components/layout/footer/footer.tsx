import { useTranslations } from 'next-intl';
import { AuroraText } from '../../ui/aurora-text';
import { ContactForm } from './footer-form';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <div
      id='contact'
      className='grid lg:grid-cols-2 px-6 py-4 lg:px-36 bg-white/80 dark:bg-black/80 border-t border-border backdrop-blur-2xl backdrop-saturate-150 shadow-lg'
    >
      <aside className='flex flex-col justify-between h-full'>
        <div>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-balance'>
            <AuroraText colors={['#059669', '#14532d', '#047857', '#065f46']}>{t('title')}</AuroraText>
          </h1>
          <p className='text-muted-foreground text-xl'>{t('desc')}</p>
        </div>

        <div className='mt-8 space-y-2'>
          <Link
            className='flex gap-2 text-muted-foreground text-xl hover:text-white'
            href='https://www.linkedin.com/in/otavio-ppereira/'
          >
            <Linkedin />
            Otávio Pereira
          </Link>
          <Link
            className='flex gap-2 text-muted-foreground text-xl hover:text-white'
            href='https://twitter.com/otaviozinn'
          >
            <Twitter />
            otaviozinn
          </Link>
        </div>
      </aside>

      <aside className='w-full place-items-center lg:px-2'>
        <ContactForm />
      </aside>
    </div>
  );
};
