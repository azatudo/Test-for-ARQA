'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, ShoppingCart, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const navItems = [
    { href: '/dashboard', labelKey: 'sidebar.dashboard', icon: LayoutDashboard },
    { href: '/orders', labelKey: 'sidebar.orders', icon: ShoppingCart },
    { href: '/customers', labelKey: 'sidebar.customers', icon: Users },
    { href: '/settings', labelKey: 'sidebar.settings', icon: Settings },
  ];

  return (
    <aside className="h-screen w-60 border-r bg-background p-4 flex flex-col gap-2">
      <h1 className="mb-6 text-xl font-bold text-primary">ARQA Analytics</h1>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Button
              key={item.href}
              variant={isActive ? 'secondary' : 'ghost'}
              className={cn(
                'justify-start w-full',
                isActive && 'bg-secondary text-secondary-foreground',
              )}
              asChild
            >
              <Link href={item.href} className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {mounted ? t(item.labelKey) : item.labelKey.split('.').pop()}
                {/* Пока не смонтирован — просто показываем английский ключ */}
              </Link>
            </Button>
          );
        })}
      </nav>
    </aside>
  );
}
