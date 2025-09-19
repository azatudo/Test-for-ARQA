export interface Customer {
  id: string;
  name: string;
  email: string;
  city: string;
  ltv: number;
  ordersCount: number;
}

export interface OrderItem {
  sku: string;
  name: string;
  qty: number;
  price: number;
}

export interface Order {
  id: string;
  date: string;
  customerId: string;
  city: string;
  channel: string;
  status: string;
  total: number;
  items: OrderItem[];
  comment?: string;
}