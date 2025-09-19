import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomersPage from '@/app/customers/page';

describe('CustomersPage Filters', () => {
  it('фильтрует клиентов по имени', () => {
    render(<CustomersPage />);
    const searchInput = screen.getByPlaceholderText(/Search by name/i);

    // Вводим часть имени
    fireEvent.change(searchInput, { target: { value: 'Aigerim' } });

    // Проверяем, что клиент отображается
    expect(screen.getByText('Aigerim K.')).toBeInTheDocument();

    // Другие клиенты должны быть скрыты
    expect(screen.queryByText('Daniyar T.')).toBeNull();
  });

  it('фильтрует клиентов по городу', () => {
    render(<CustomersPage />);
    const cityInput = screen.getByPlaceholderText(/Filter by city/i);

    fireEvent.change(cityInput, { target: { value: 'Астана' } });

    expect(screen.getByText('Daniyar T.')).toBeInTheDocument();
    expect(screen.queryByText('Aigerim K.')).toBeNull();
  });
});
