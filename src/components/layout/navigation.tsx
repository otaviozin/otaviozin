'use client';

import { Menu } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';
import { useLocale, useTranslations } from 'next-intl';
import { NavigationWrapper } from './navigation-wrapper';
import Image from 'next/image';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export const Navigation = () => {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();

    setIsSheetOpen(false);

    const hash = url.includes('#') ? url.substring(url.indexOf('#')) : url;

    if (hash && hash.startsWith('#')) {
      const sectionId = hash.substring(1);
      const element = document.getElementById(sectionId);

      if (element) {
        const navigationHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navigationHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        window.history.pushState(null, '', hash);
      }
    }
  };

  const handleLocaleChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const logo = {
    url: 'https://otaviozin.vercel.app',
    src: '/logo.png',
    alt: 'logo',
    title: 'Otávio Pereira',
  };

  const menu = [
    { title: t('home'), url: `${locale}/` },
    {
      title: t('about'),
      url: `${locale}/#about`,
    },
    {
      title: t('skills'),
      url: `${locale}/#skills`,
    },
    {
      title: t('projects'),
      url: `${locale}/#projects`,
    },
    {
      title: t('contact'),
      url: `${locale}/#contact`,
    },
  ];

  const languages = [
    { code: 'pt-br', label: 'Português' },
    { code: 'en', label: 'English' },
  ];

  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-popover text-popover-foreground'>
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title} className='w-80'>
                <SubMenuLink item={subItem} handleScrollToSection={handleScrollToSection} />
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink
          href={item.url}
          onClick={(e) => handleScrollToSection(e, item.url)}
          className='hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm text-md font-semibold transition-colors cursor-pointer'
        >
          {item.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <AccordionItem key={item.title} value={item.title} className='border-b-0'>
          <AccordionTrigger className='text-md py-0 font-semibold hover:no-underline'>{item.title}</AccordionTrigger>
          <AccordionContent className='mt-2'>
            {item.items.map((subItem) => (
              <SubMenuLink key={subItem.title} item={subItem} handleScrollToSection={handleScrollToSection} />
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <a
        key={item.title}
        href={item.url}
        onClick={(e) => handleScrollToSection(e, item.url)}
        className='text-md font-semibold cursor-pointer'
      >
        {item.title}
      </a>
    );
  };

  return (
    <NavigationWrapper>
      {/* Desktop Menu */}
      <nav className='hidden lg:grid px-6 lg:px-12'>
        <div className='flex justify-around items-center w-full'>
          {/* Logo */}
          <a href={logo.url} className='flex items-center gap-2 w-fit'>
            <Image src={logo.src} className='max-h-8 dark:invert' alt={logo.alt} width={48} height={32} />
            <span className='text-2xl font-semibold tracking-tighter hover:drop-shadow-md'>{logo.title}</span>
          </a>

          {/* Menu items */}
          <div className='flex items-center'>
            <NavigationMenu>
              <NavigationMenuList>{menu.map((item) => renderMenuItem(item))}</NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Theme toggler and language selector */}
          <div className='flex items-center gap-3'>
            <AnimatedThemeToggler />
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' className='relative'>
                  <Globe className='h-5 w-5' />
                  <span className='sr-only'>Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='min-w-[140px]'>
                <DropdownMenuLabel>{t('lang.label')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={locale} onValueChange={handleLocaleChange}>
                  {languages.map((lang) => (
                    <DropdownMenuRadioItem key={lang.code} value={lang.code}>
                      {lang.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className='block lg:hidden px-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a href={logo.url} className='flex items-center gap-2'>
            <Image src={logo.src} className='max-h-8 dark:invert' alt={logo.alt} width={48} height={32} />
            <span className='text-xl font-semibold tracking-tighter drop-shadow-md'>{logo.title}</span>
          </a>

          <div className='flex items-center gap-2'>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Globe className='h-5 w-5' />
                  <span className='sr-only'>Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='min-w-[140px]'>
                <DropdownMenuLabel>{t('lang.label')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={locale} onValueChange={handleLocaleChange}>
                  {languages.map((lang) => (
                    <DropdownMenuRadioItem key={lang.code} value={lang.code}>
                      {lang.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Menu className='size-4' />
                </Button>
              </SheetTrigger>
              <SheetContent className='overflow-y-auto'>
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className='flex items-center gap-2 w-fit'>
                      <Image src={logo.src} className='max-h-8 dark:invert' alt={logo.alt} width={48} height={32} />
                      <span className='text-lg font-semibold tracking-tighter'>{logo.title}</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-6 p-4'>
                  <Accordion type='single' collapsible className='flex w-full flex-col gap-4'>
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </div>
                <SheetFooter>
                  <AnimatedThemeToggler />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

const SubMenuLink = ({
  item,
  handleScrollToSection,
}: {
  item: MenuItem;
  handleScrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}) => {
  return (
    <a
      className='hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors cursor-pointer'
      href={item.url}
      onClick={(e) => handleScrollToSection(e, item.url)}
    >
      <div className='text-foreground'>{item.icon}</div>
      <div>
        <div className='text-sm font-semibold'>{item.title}</div>
        {item.description && <p className='text-muted-foreground text-sm leading-snug'>{item.description}</p>}
      </div>
    </a>
  );
};
