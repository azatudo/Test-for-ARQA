import { test, expect } from '@playwright/test';
import fs from 'fs';

test.describe('Customers Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/customers');
  });

  test('фильтр по имени работает', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Search by name...');
    await searchInput.fill('Aigerim');

    const customerCard = page.getByText('Aigerim K.');
    await expect(customerCard).toBeVisible();

    // Другие карточки должны быть скрыты
    await expect(page.getByText('Daniyar T.')).toHaveCount(0);
  });

  test('фильтр по городу работает', async ({ page }) => {
    const cityInput = page.getByPlaceholder('Filter by city...');
    await cityInput.fill('Астана');

    await expect(page.getByText('Daniyar T.')).toBeVisible();
    await expect(page.getByText('Aigerim K.')).toHaveCount(0);
  });

  test('экспорт CSV создает файл', async ({ page, context }) => {
    const [download] = await Promise.all([
      page.waitForEvent('download'), // ждем скачивания
      page.getByRole('button', { name: 'Export CSV' }).click(),
    ]);

    const path = await download.path();
    expect(fs.existsSync(path!)).toBeTruthy();

    // Можно проверить содержимое файла
    const csv = fs.readFileSync(path!, 'utf-8');
    expect(csv).toContain('id,name,email,city,ltv,ordersCount');
    expect(csv).toContain('Aigerim K.');
  });
});