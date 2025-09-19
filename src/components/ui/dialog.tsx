import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

export const Dialog = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;
export const DialogContent = RadixDialog.Content;
export const DialogTitle = RadixDialog.Title;
export const DialogDescription = RadixDialog.Description;
export const DialogClose = RadixDialog.Close;

// Пример стилизованного контента
export function StyledDialogContent(props: React.ComponentProps<typeof DialogContent>) {
  return (
    <DialogContent
      className={cn(
        'fixed top-1/2 left-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg focus:outline-none',
        props.className,
      )}
      {...props}
    />
  );
}
