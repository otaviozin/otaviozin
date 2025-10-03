import { GetUser, GetUserRepos } from '@/api/github';
import { SkillsCards } from '@/components/home/skills-cards';
import { AuroraText } from '@/components/ui/aurora-text';
import { HyperText } from '@/components/ui/hyper-text';
import { useTranslations } from 'next-intl';
import { use } from 'react';
import Image from 'next/image';
import { Experience } from '@/components/home/experience';

export default function Home() {
  const t = useTranslations('Home');

  const repos = use(GetUserRepos());
  const user = use(GetUser());

  return (
    <div className='relative w-full px-3'>
      <div className='grid lg:grid-cols-2 lg:w-2/3 lg:justify-self-center'>
        <div className='text-left grid'>
          <h4 className='scroll-m-20 text-lg font-semibold tracking-tight'>{t('greetings')}</h4>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-balance'>
            <AuroraText colors={['#059669', '#14532d', '#047857', '#065f46']}>{t('my_name')}</AuroraText>
          </h1>
          <p className='text-muted-foreground text-lg mt-3'>{t('job_position')}</p>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>{t('presentation')}</p>
        </div>
        <Image
          className='rounded-full justify-self-center hidden lg:flex'
          src={user.data.avatar_url}
          alt='GitHub user avatar'
          width={256}
          height={256}
          quality={100}
        />
      </div>
      <div className='mt-6'>
        <Experience />
      </div>
    </div>
  );
}
