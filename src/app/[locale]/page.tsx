import { SkillsCards } from '@/components/home/skills-cards';
import { AuroraText } from '@/components/ui/aurora-text';
import { HyperText } from '@/components/ui/hyper-text';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className='relative w-full px-3'>
      <div className='grid'>
        <div className='text-left grid'>
          <h4 className='scroll-m-20 text-lg font-semibold tracking-tight'>{t('greetings')}</h4>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-balance'>
            <AuroraText colors={['#059669', '#14532d', '#047857', '#065f46']}>{t('my_name')}</AuroraText>
          </h1>
          <p className='text-muted-foreground text-lg mt-3'>{t('job_position')}</p>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>{t('presentation')}</p>
        </div>
      </div>
      <div className='mt-6'>
        <HyperText
          className='scroll-m-20 text- text-4xl font-extrabold tracking-tight text-balance'
          animateOnHover={false}
        >
          Skills
        </HyperText>
        <SkillsCards />
      </div>
    </div>
  );
}
