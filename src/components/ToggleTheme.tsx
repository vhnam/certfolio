import { useState, useEffect, useCallback } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

const THEME_KEY = 'theme';

function getTheme(): 'light' | 'dark' {
  if (typeof localStorage === 'undefined') return 'light';
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(theme: 'light' | 'dark') {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function ToggleTheme() {
  // SSR-safe initial state: always 'light' so server and first client render match (avoids hydration mismatch).
  // Real theme is applied in useEffect after mount.
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const resolved = getTheme();
    setTheme(resolved);
    applyTheme(resolved);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
      return next;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  return (
    <Button
      type='button'
      variant='outline'
      size='icon'
      onClick={toggle}
      aria-label={
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
    >
      {theme === 'dark' ? (
        <IconSun className='size-4' aria-hidden />
      ) : (
        <IconMoon className='size-4' aria-hidden />
      )}
    </Button>
  );
}
