'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import ordersData from '@/data/orders.json';
import { useCsvExport } from '@/hooks/useCsvExport';
import { useTranslation } from 'react-i18next';
import { OrdersTable } from '@/components/orders/OrdersTable';
import { Order } from '@/types';

export default function OrdersPage() {
  const { t } = useTranslation();
  const [search, setSearch] = React.useState('');
  const [sortField, setSortField] = React.useState<keyof Order | null>(null);
  const [sortAsc, setSortAsc] = React.useState(true);

  const { exportToCsv } = useCsvExport<Record<string, string | number>>();

  const orders: Order[] = (ordersData as { orders: Order[] }).orders;

  const filteredOrders = React.useMemo(() => {
    let result = orders.filter(
      (o) =>
        o.id.toLowerCase().includes(search.toLowerCase()) ||
        o.city.toLowerCase().includes(search.toLowerCase()) ||
        o.customerId.toLowerCase().includes(search.toLowerCase()),
    );
    if (sortField) {
      result = result.sort((a, b) => {
        const aVal = a[sortField] as string | number;
        const bVal = b[sortField] as string | number;
        if (aVal < bVal) return sortAsc ? -1 : 1;
        if (aVal > bVal) return sortAsc ? 1 : -1;
        return 0;
      });
    }
    return result;
  }, [search, sortField, sortAsc, orders]);

  const handleSort = (field: keyof Order) => {
    if (sortField === field) setSortAsc(!sortAsc);
    else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const csvData: Record<string, string | number>[] = filteredOrders.map((o) => ({
    id: o.id,
    date: o.date,
    customerId: o.customerId,
    city: o.city,
    channel: o.channel,
    status: o.status,
    total: o.total,
  }));

  return (
    <div className="flex flex-col gap-4">
      {/* Поиск */}
      <div className="flex gap-2">
        <input
          placeholder={t('orders.searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded flex-1"
        />
      </div>

      {/* Кнопка Export CSV */}
      <Button
        onClick={() => exportToCsv('orders.csv', csvData)}
        variant="secondary"
        className="mb-2"
      >
        {t('dashboard.exportCsv')}
      </Button>

      {/* Таблица заказов */}
      <OrdersTable
        orders={filteredOrders}
        sortField={sortField}
        sortAsc={sortAsc}
        onSort={handleSort}
      />
    </div>
  );
}
