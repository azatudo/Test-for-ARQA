'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface RevenueChartProps {
  data: { day: string; revenue: number }[];
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
