import { useTranslations } from 'next-intl';
import { AuroraText } from '../ui/aurora-text';

type Experience = {
  company: string;
  roles: {
    job_title: string;
    period: string;
    desc: string;
  }[];
};

export const Experience = () => {
  const t = useTranslations('Experience');
  const exp = useTranslations('Experience.experiences');

  const getExperiences = (): Experience[] => {
    const result: Experience[] = [];
    let expIndex = 0;

    while (exp.has(`${expIndex}.company`)) {
      const roles = [];
      let roleIndex = 0;

      while (exp.has(`${expIndex}.roles.${roleIndex}.job_title`)) {
        roles.push({
          job_title: exp(`${expIndex}.roles.${roleIndex}.job_title`),
          period: exp(`${expIndex}.roles.${roleIndex}.period`),
          desc: exp(`${expIndex}.roles.${roleIndex}.desc`),
        });
        roleIndex++;
      }

      result.push({
        company: exp(`${expIndex}.company`),
        roles,
      });
      expIndex++;
    }

    return result;
  };

  const experiences = getExperiences();

  return (
    <section>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-balance'>
        <AuroraText colors={['#059669', '#14532d', '#047857', '#065f46']}>{t('title')}</AuroraText>
      </h1>
      {experiences.map((exp, idx) => (
        <div key={idx} className='mt-4'>
          <h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>{exp.company}</h2>
          {exp.roles.map((role, roleIdx) => (
            <div key={roleIdx} className='role-section my-4'>
              <span className='text-muted-foreground'>{role.period}</span>
              <h3 className='text-xl font-bold'>{role.job_title}</h3>
              <p className='leading-7 text-white/80'>{role.desc}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
