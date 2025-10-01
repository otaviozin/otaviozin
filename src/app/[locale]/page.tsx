import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className='relative w-full'>
      <h1>TEMPLATE TEXT</h1>
      <h1>NOTHING HERE</h1>
    </div>
  );
}
