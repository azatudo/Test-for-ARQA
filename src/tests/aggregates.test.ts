import { renderHook } from '@testing-library/react';
import { useDashboardAggregates } from '@/hooks/useDashboardAggregates';
import ordersData from '@/data/orders.json';
import visitsData from '@/data/visits.json';

describe('useDashboardAggregates', () => {
  it('вычисляет агрегаты корректно', () => {
    const { result } = renderHook(() => useDashboardAggregates());

    const orders = (ordersData as { orders: { total: number }[] }).orders;
    const visits = (visitsData as { visits: { count: number }[] }).visits;

    const expectedRevenue = orders.reduce((acc, o) => acc + o.total, 0);
    const expectedOrders = orders.length;
    const expectedAov = expectedRevenue / expectedOrders;
    const expectedConversionRate =
      visits.reduce((acc, v) => acc + v.count, 0) > 0
        ? expectedOrders / visits.reduce((acc, v) => acc + v.count, 0)
        : 0;

    expect(result.current.revenue).toBe(expectedRevenue);
    expect(result.current.orders).toBe(expectedOrders);
    expect(result.current.aov).toBe(expectedAov);
    expect(result.current.conversionRate).toBeCloseTo(expectedConversionRate, 5);
  });
});
