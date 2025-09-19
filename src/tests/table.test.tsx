import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OrdersPage from '@/app/orders/page';

describe('OrdersPage Table', () => {
  it('отображает все заказы по умолчанию', () => {
    render(<OrdersPage />);
    expect(screen.getByText('ORD-1001')).toBeInTheDocument();
    expect(screen.getByText('ORD-1002')).toBeInTheDocument();
    expect(screen.getByText('ORD-1003')).toBeInTheDocument();
  });

  it('поиск по Order ID работает', () => {
    render(<OrdersPage />);
    const searchInput = screen.getByPlaceholderText(/Search by Order ID/i);

    fireEvent.change(searchInput, { target: { value: 'ORD-1001' } });

    expect(screen.getByText('ORD-1001')).toBeInTheDocument();
    expect(screen.queryByText('ORD-1002')).toBeNull();
    expect(screen.queryByText('ORD-1003')).toBeNull();
  });

  it('сортировка по Total работает', () => {
    render(<OrdersPage />);
    const totalHeader = screen.getByText('TOTAL');

    // Первый клик — сортировка по возрастанию
    fireEvent.click(totalHeader);

    const rows = screen.getAllByRole('row');
    // Простейшая проверка: первая строка после заголовка имеет наименьший total
    expect(rows[1]).toHaveTextContent('ORD-1003'); // 45000
  });
});
