'use client';

import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import customersData from '@/data/customers.json';
import { useCsvExport } from '@/hooks/useCsvExport';
import { useTranslation } from 'react-i18next';

import { CustomerCard } from '@/components/customers/CustomerCard';
import { CustomerDialog } from '@/components/customers/CustomerDialog';
import { Customer } from '@/types';

const customers: Customer[] = (customersData as { customers: Customer[] }).customers;

export default function CustomersPage() {
  const { t } = useTranslation();
  const [search, setSearch] = React.useState('');
  const [cityFilter, setCityFilter] = React.useState('');

  const filteredCustomers = customers
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    .filter((c) => (cityFilter ? c.city === cityFilter : true));

  const { exportToCsv } = useCsvExport<Record<string, string | number>>();

  const csvData: Record<string, string | number>[] = filteredCustomers.map((c: Customer) => ({
    id: c.id,
    name: c.name,
    email: c.email,
    city: c.city,
    ltv: c.ltv,
    ordersCount: c.ordersCount,
  }));

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t('Customers') || 'Customers'}</h1>

      <div className="flex gap-2">
        <Input
          placeholder={t('customers.searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Input
          placeholder={t('customers.cityFilterPlaceholder')}
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        />
      </div>

      <Button
        onClick={() => exportToCsv('customers.csv', csvData)}
        variant="secondary"
        className="mb-2"
      >
        {t('dashboard.exportCsv')}
      </Button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCustomers.map((customer) => (
          <CustomerDialog
            key={customer.id}
            customerName={customer.name}
            ordersCount={customer.ordersCount}
            trigger={
              <CustomerCard
                name={customer.name}
                email={customer.email}
                city={customer.city}
                ordersCount={customer.ordersCount}
                ltv={customer.ltv}
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
