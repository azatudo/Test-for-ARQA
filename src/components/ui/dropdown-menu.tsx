import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';

export const DropdownMenu = RadixDropdownMenu.Root;
export const DropdownMenuTrigger = RadixDropdownMenu.Trigger;
export const DropdownMenuContent = RadixDropdownMenu.Content;
export const DropdownMenuItem = RadixDropdownMenu.Item;
export const DropdownMenuLabel = RadixDropdownMenu.Label;
export const DropdownMenuSeparator = RadixDropdownMenu.Separator;

// Можно добавить стили через cn
export function StyledDropdownMenuItem(props: React.ComponentProps<typeof DropdownMenuItem>) {
  return <DropdownMenuItem className={cn('px-2 py-1 cursor-pointer hover:bg-accent')} {...props} />;
}
