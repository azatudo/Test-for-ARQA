"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { Order } from "@/types";

interface OrdersTableProps {
  orders: Order[];
  sortField: keyof Order | null;
  sortAsc: boolean;
  onSort: (field: keyof Order) => void;
}

export function OrdersTable({ orders, onSort }: OrdersTableProps) {
  const { t } = useTranslation();

  return (
    <Card className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            {["id", "date", "customerId", "city", "channel", "status", "total"].map((col) => (
              <th
                key={col}
                className="border-b px-4 py-2 text-left cursor-pointer"
                onClick={() => onSort(col as keyof Order)}
              >
                {t(`orders.${col}`) || col.toUpperCase()}
              </th>
            ))}
            <th className="border-b px-4 py-2">{t("orders.details")}</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-muted">
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.date}</td>
              <td className="border px-4 py-2">{order.customerId}</td>
              <td className="border px-4 py-2">{order.city}</td>
              <td className="border px-4 py-2">{order.channel}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">${order.total}</td>
              <td className="border px-4 py-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="ghost">{t("orders.details")}</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogTitle>
                      {t("orders.order")} {order.id}
                    </DialogTitle>
                    <ul className="mt-2 list-disc list-inside">
                      {order.items.map((item) => (
                        <li key={item.sku}>
                          {item.name} x{item.qty} (${item.price})
                        </li>
                      ))}
                    </ul>
                    {order.comment && (
                      <p className="mt-2 text-sm">
                        {t("orders.comment")}: {order.comment}
                      </p>
                    )}
                    <DialogClose asChild>
                      <Button className="mt-4 w-full">{t("orders.close")}</Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}