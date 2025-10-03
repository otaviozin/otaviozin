import { cn } from '@/lib/utils';
import { Marquee } from '../../ui/marquee';
import { ShineBorder } from '@/components/ui/shine-border';
import { AuroraText } from '@/components/ui/aurora-text';

const frontEnd = [
  {
    name: 'Next.js',
    imgLight: 'https://cdn.simpleicons.org/nextdotjs/000000',
    imgDark: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
  },
  { name: 'TypeScript', img: 'https://cdn.simpleicons.org/typescript' },
  { name: 'JavaScript', img: 'https://cdn.simpleicons.org/javascript' },
  { name: 'TailwindCSS', img: 'https://cdn.simpleicons.org/tailwindcss' },
];

const backEnd = [
  { name: 'Node.js', img: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Go', img: 'https://cdn.simpleicons.org/go' },
  { name: 'PostgreSQL', img: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'Firebase', img: 'https://cdn.simpleicons.org/firebase' },
];

const tools = [
  { name: 'Docker', img: 'https://cdn.simpleicons.org/docker' },
  {
    name: 'Git',
    img: 'https://cdn.simpleicons.org/git',
  },
  {
    name: 'GitHub',
    imgLight: 'https://cdn.simpleicons.org/github/000000',
    imgDark: 'https://cdn.simpleicons.org/github/ffffff',
  },
  {
    name: 'Vercel',
    imgLight: 'https://cdn.simpleicons.org/vercel/000000',
    imgDark: 'https://cdn.simpleicons.org/vercel/ffffff',
  },
];

const ReviewCard = ({
  img,
  imgLight,
  imgDark,
  name,
}: {
  img?: string;
  imgLight?: string;
  imgDark?: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-40 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        {imgLight && imgDark ? (
          <>
            <img className='dark:hidden' width='32' height='32' alt={name} src={imgLight} />
            <img className='hidden dark:block' width='32' height='32' alt={name} src={imgDark} />
          </>
        ) : (
          <img width='32' height='32' alt={name} src={img!} />
        )}

        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white/40'>{name}</figcaption>
        </div>
      </div>
    </figure>
  );
};

export function SkillsCards() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg dark:bg-neutral-900'>
      <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
      <div className='grid'>
        <h1 className='scroll-m-20 text-2xl font-extrabold tracking-tight text-balance pl-2 pt-3'>
          <AuroraText colors={['#059669', '#14532d', '#047857', '#065f46']}>Front-End</AuroraText>
        </h1>
        <Marquee pauseOnHover className='[--duration:20s]'>
          {frontEnd.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        <h1 className='scroll-m-20 text-2xl font-extrabold tracking-tight text-balance pl-2 pt-3'>
          <AuroraText colors={['#2563eb', '#0c4a6e', '#1d4ed8', '#1e40af']}>Back-End</AuroraText>
        </h1>
        <Marquee reverse pauseOnHover className='[--duration:20s]'>
          {backEnd.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        <h1 className='scroll-m-20 text-2xl font-extrabold tracking-tight text-balance pl-2 pt-3'>
          <AuroraText colors={['#d97706', '#7c2d12', '#b45309', '#92400e']}>Tools</AuroraText>
        </h1>
        <Marquee reverse pauseOnHover className='[--duration:20s]'>
          {tools.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
