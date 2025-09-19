import { renderHook } from '@testing-library/react';
import { useCsvExport } from '@/hooks/useCsvExport';

describe('useCsvExport', () => {
  it('создаёт CSV из массива объектов', () => {
    const { result } = renderHook(() => useCsvExport<{ a: number; b: string }>());
    const spy = jest.spyOn(URL, 'createObjectURL').mockReturnValue('blob://mock');

    const data = [
      { a: 1, b: 'one' },
      { a: 2, b: 'two' },
    ];

    result.current.exportToCsv('test.csv', data);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('не падает при пустом массиве', () => {
    const { result } = renderHook(() => useCsvExport<{ a: number }>());
    expect(() => result.current.exportToCsv('empty.csv', [])).not.toThrow();
  });
});
