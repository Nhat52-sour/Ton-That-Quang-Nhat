"use client"
import { Button } from '@/components/ui/button'
import Logo from './logo'
import Menu from './menu'
import SwitchLanguage from './switch-language'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '../../../../components/theme-toggle'
import { useTheme } from 'next-themes'

export const Navbar = () => {
  const [background, setBackground] = useState('bg-black');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBackground('bg-black shadow-sm text-white');
      } else {
        setBackground('bg-black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { theme } = useTheme()

  return (
    <div className={cn(
      'w-full px-32 flex justify-between fixed z-20 transition text-foreground shadow-lg',
      background,
      theme === 'dark' && 'text-white'
    )}>
      <Logo />
      <Menu />
      <div className='flex gap-5 justify-center items-center'>
        <SwitchLanguage />
        <ThemeToggle />
        <Button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-6 text-white' size="sm">Login</Button>
      </div>
    </div>
  )
}

export default Navbar
