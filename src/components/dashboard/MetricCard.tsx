'use client';

import { Card } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string | number;
}

export function MetricCard({ title, value }: MetricCardProps) {
  return (
    <Card className="p-4">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <p className="mt-2 text-xl font-bold">{value}</p>
    </Card>
  );
}
