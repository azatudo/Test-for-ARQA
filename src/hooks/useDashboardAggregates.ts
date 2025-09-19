import { useMemo } from 'react';
import ordersData from '@/data/orders.json';
import visitsData from '@/data/visits.json';

interface Order {
  id: string;
  total: number;
}

interface Visit {
  date: string;
  count: number;
}

export interface DashboardAggregates {
  revenue: number;
  orders: number;
  aov: number;
  conversionRate: number; // 0-1
}

export function useDashboardAggregates(): DashboardAggregates {
  const aggregates = useMemo(() => {
    const orders: Order[] = (ordersData as { orders: Order[] }).orders;
    const visits: Visit[] = (visitsData as { visits: Visit[] }).visits;

    const revenue = orders.reduce((acc, o) => acc + o.total, 0);
    const totalOrders = orders.length;
    const aov = totalOrders > 0 ? revenue / totalOrders : 0;

    const totalVisits = visits.reduce((acc, v) => acc + v.count, 0);
    const conversionRate = totalVisits > 0 ? totalOrders / totalVisits : 0;

    return {
      revenue,
      orders: totalOrders,
      aov,
      conversionRate,
    };
  }, []);

  return aggregates;
}
