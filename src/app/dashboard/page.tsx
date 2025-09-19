"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useDashboardAggregates } from "@/hooks/useDashboardAggregates";
import { useCsvExport } from "@/hooks/useCsvExport";
import ordersData from "@/data/orders.json";
import { useTranslation } from "react-i18next";

import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";

const dashboardData = (ordersData as { orders: { date: string; total: number }[] }).orders.map(
  (o) => ({ day: o.date, revenue: o.total })
);

export default function DashboardPage() {
  const { t } = useTranslation();
  const { revenue, orders, aov, conversionRate } = useDashboardAggregates();
  const { exportToCsv } = useCsvExport<Record<string, string | number>>();

  const aggregatesForCsv: Record<string, string | number>[] = [
    { metric: t("dashboard.revenue"), value: revenue },
    { metric: t("dashboard.orders"), value: orders },
    { metric: t("dashboard.aov"), value: aov.toFixed(2) },
    { metric: t("dashboard.conversionRate"), value: (conversionRate * 100).toFixed(1) + "%" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Карточки метрик */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title={t("dashboard.revenue")} value={`$${revenue}`} />
        <MetricCard title={t("dashboard.orders")} value={orders} />
        <MetricCard title={t("dashboard.aov")} value={`$${aov.toFixed(2)}`} />
        <MetricCard title={t("dashboard.conversionRate")} value={`${(conversionRate * 100).toFixed(1)}%`} />
      </div>

      {/* Кнопка Export CSV */}
      <Button
        onClick={() => exportToCsv("dashboard-aggregates.csv", aggregatesForCsv)}
        variant="secondary"
      >
        {t("dashboard.exportCsv")}
      </Button>

      {/* График Revenue */}
      <RevenueChart data={dashboardData} />
    </div>
  );
}