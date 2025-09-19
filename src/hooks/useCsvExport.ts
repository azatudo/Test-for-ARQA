import { useCallback } from 'react';

export function useCsvExport<T extends Record<string, string | number | boolean>>() {
  const exportToCsv = useCallback((filename: string, data: T[]) => {
    if (!data || data.length === 0) return;

    // Заголовки CSV — ключи первого объекта
    const headers = Object.keys(data[0]);

    const csvRows = [
      headers.join(','), // первая строка — заголовки
      ...data.map((row) =>
        headers
          .map((field) => {
            const val = row[field];
            // Экранирование строк: кавычки → двойные кавычки
            const escaped = typeof val === 'string' ? `"${val.replace(/"/g, '""')}"` : val;
            return escaped;
          })
          .join(','),
      ),
    ];

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    // Создаём временную ссылку и кликаем по ней для скачивания
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    link.click();
    URL.revokeObjectURL(url);
  }, []);

  return { exportToCsv };
}
