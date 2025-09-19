'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  // Отмечаем, что компонент смонтирован на клиенте
  React.useEffect(() => {
    setMounted(true);

    // Инициализация темы из localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);

    // Инициализация языка из localStorage
    const savedLang = localStorage.getItem('locale');
    if (savedLang && savedLang !== i18n.language) i18n.changeLanguage(savedLang);
  }, [setTheme, i18n]);

  const toggleTheme = () => {
    if (!mounted) return;
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleLanguage = () => {
    if (!mounted) return;
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('locale', newLang);
  };

  if (!mounted) return null; // пока не смонтирован — не рендерим кнопки

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <h1 className="text-2xl font-bold">{t('Settings') || 'Settings'}</h1>

      <Card className="p-4 flex flex-col gap-4">
        {/* Theme toggle */}
        <div className="flex justify-between items-center">
          <span>{t('settings.theme')}</span>
          <Button onClick={toggleTheme} size="sm" variant="secondary">
            {theme === 'dark' ? t('settings.dark') : t('settings.light')}
          </Button>
        </div>

        {/* Language toggle */}
        <div className="flex justify-between items-center">
          <span>{t('settings.language')}</span>
          <Button onClick={toggleLanguage} size="sm" variant="secondary">
            {i18n.language === 'en' ? t('settings.english') : t('settings.russian')}
          </Button>
        </div>
      </Card>
    </div>
  );
}
