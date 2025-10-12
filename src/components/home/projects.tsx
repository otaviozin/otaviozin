import { GetUserRepos } from '@/api/github';
import { useTranslations } from 'next-intl';
import { use } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const Projects = () => {
  const repos = use(GetUserRepos());
  const t = useTranslations('Projects');
  console.log(repos);

  const customKeys: Record<string, { title: string; desc: string }> = {
    otaviozin: { title: 'portfolio.title', desc: 'portfolio.desc' },
    binomial_distribution: { title: 'binomial_distribution.title', desc: 'binomial_distribution.desc' },
  };

  return repos.data
    .slice()
    .reverse()
    .map((repo) => (
      <Card className='w-full shadow-none mt-6' key={repo.id}>
        <CardHeader className='justify-center'>
          <Image
            src={`https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/page.png`}
            alt={repo.name}
            width={500}
            height={500}
            className='rounded-lg'
          />
        </CardHeader>
        <CardContent>
          <CardTitle className='text-2xl'>
            {customKeys[repo.name] ? t(customKeys[repo.name].title) : repo.name}
          </CardTitle>
          <CardDescription>{customKeys[repo.name] ? t(customKeys[repo.name].desc) : repo.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={repo.svn_url as string}>
              {t('link')}
              <GitHubLogoIcon />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    ));
};
