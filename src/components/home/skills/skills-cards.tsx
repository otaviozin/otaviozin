import { cn } from '@/lib/utils';
import { Marquee } from '../../ui/marquee';

const skills = [
  {
    name: 'Next.js',
    imgLight: 'https://cdn.simpleicons.org/nextdotjs/000000',
    imgDark: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
  },
  {
    name: 'Node.js',
    img: 'https://cdn.simpleicons.org/nodedotjs',
  },
  {
    name: 'TypeScript',
    img: 'https://cdn.simpleicons.org/typescript',
  },
  {
    name: 'JavaScript',
    img: 'https://cdn.simpleicons.org/javascript',
  },
  {
    name: 'TailwindCSS',
    img: 'https://cdn.simpleicons.org/tailwindcss',
  },
  {
    name: 'Golang',
    img: 'https://cdn.simpleicons.org/go',
  },
  {
    name: 'PostgreSQL',
    img: 'https://cdn.simpleicons.org/postgresql',
  },
  {
    name: 'Docker',
    img: 'https://cdn.simpleicons.org/docker',
  },
  {
    name: 'Firebase',
    img: 'https://cdn.simpleicons.org/firebase',
  },
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);
const thirdRow = skills.slice(0, skills.length / 2);
const fourthRow = skills.slice(skills.length / 2);

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
        'relative h-full w-[140px] cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        {imgLight && imgDark ? (
          <>
            <img className='rounded-full dark:hidden' width='32' height='32' alt={name} src={imgLight} />
            <img className='hidden rounded-full dark:block' width='32' height='32' alt={name} src={imgDark} />
          </>
        ) : (
          <img className='rounded-full' width='32' height='32' alt={name} src={img!} />
        )}

        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>{name}</figcaption>
        </div>
      </div>
    </figure>
  );
};

export function SkillsCards() {
  return (
    <div className='relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]'>
      <div
        className='flex flex-row items-center'
        style={{
          transform:
            'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
        }}
      >
        <Marquee pauseOnHover vertical className='[--duration:20s]'>
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:20s]' vertical>
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:20s]' vertical>
          {thirdRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className='[--duration:20s]' vertical>
          {fourthRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
      <div className='from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b'></div>
      <div className='from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t'></div>
      <div className='from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r'></div>
      <div className='from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l'></div>
    </div>
  );
}
