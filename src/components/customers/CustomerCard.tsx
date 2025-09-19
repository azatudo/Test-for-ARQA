'use client';

import { Card } from '@/components/ui/card';

interface CustomerCardProps {
  name: string;
  email: string;
  city: string;
  ordersCount: number;
  ltv: number;
}

export function CustomerCard({ name, email, city, ordersCount, ltv }: CustomerCardProps) {
  return (
    <Card className="p-4 cursor-pointer hover:shadow-md transition">
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm text-muted-foreground">{email}</p>
      <p className="text-sm">City: {city}</p>
      <p className="text-sm">Orders: {ordersCount}</p>
      <p className="text-sm">LTV: ${ltv}</p>
    </Card>
  );
}
