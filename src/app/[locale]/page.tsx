import { GetUser } from '@/api/github';
import { SkillsCards } from '@/components/home/skills/skills-cards';
import { AuroraText } from '@/components/ui/aurora-text';
import { useTranslations } from 'next-intl';
import { use } from 'react';
import Image from 'next/image';
import { Experience } from '@/components/home/experience';
import { SkillsBeam } from '@/components/home/skills/skills-beam';

export default function Home() {
  const t = useTranslations('Home');

  const user = use(GetUser());

  return (
    <div className='relative w-full lg:w-2/3 lg:justify-self-center px-3'>
      <div className='grid lg:grid-cols-2'>
        <div className='text-left grid'>
          <h4 className='scroll-m-20 text-lg font-semibold tracking-tight'>{t('greetings')}</h4>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-balance'>
            <AuroraText colors={['#059669', '#14532d', '#047857', '#065f46']}>{t('my_name')}</AuroraText>
          </h1>
          <p className='text-muted-foreground text-lg mt-3'>{t('job_position')}</p>
          <p className='leading-7 [&:not(:first-child)]:mt-6 text-shadow-lg text-shadow-neutral-300/80 dark:text-shadow-none'>
            {t('presentation')}
          </p>
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
      <div className='mt-6'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-balance'>
          <AuroraText colors={['#059669', '#14532d', '#047857', '#065f46']}>Skills</AuroraText>
        </h1>
        <div className='grid lg:grid-cols-2 gap-4'>
          <aside className='flex flex-col justify-center gap-10'>
            <p className='text-muted-foreground text-xl'>
              Atualmente este projeto faz uso dessas tecnologias, que representam as principais ferramentas do meu dia a
              dia. São tecnologias que aplico tanto no ambiente de trabalho quanto em projetos pessoais, sempre buscando
              boas práticas, escalabilidade e qualidade no desenvolvimento.
            </p>
            <p className='text-muted-foreground text-xl'>
              Além disso, essas tecnologias refletem meu foco em entregar soluções modernas, performáticas e alinhadas
              às necessidades reais de cada projeto.
            </p>
          </aside>
          <SkillsBeam />
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-4 flex-col-reverse'>
          <SkillsCards />
          <p className='text-muted-foreground text-xl'>
            Além das tecnologias acima, também possuo conhecimento com outras tecnologias. Elas estão separadas por tipo
            e você pode conferir no card.
          </p>
        </div>
      </div>
    </div>
  );
}
