// Простейший пример API-обёртки для будущих fetch-запросов

export async function fetchOrders() {
  // Здесь можно подключить реальный API
  // return fetch("/api/orders").then(res => res.json());

  // Пока возвращаем моковые данные
  const data = await import('@/data/orders.json');
  return data.orders;
}

export async function fetchCustomers() {
  const data = await import('@/data/customers.json');
  return data.customers;
}

export async function fetchVisits() {
  const data = await import('@/data/visits.json');
  return data.visits;
}

// Можно добавить общую функцию fetcher для React Query
export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
