"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CustomerDialogProps {
  customerName: string;
  ordersCount: number;
  trigger: React.ReactNode;
}

export function CustomerDialog({ customerName, ordersCount, trigger }: CustomerDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogTitle>{customerName} — Orders</DialogTitle>
        <ul className="mt-2 list-disc list-inside">
          {Array.from({ length: ordersCount }).map((_, idx) => (
            <li key={idx}>Order #{idx + 1}</li>
          ))}
        </ul>
        <DialogClose asChild>
          <Button className="mt-4 w-full">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}