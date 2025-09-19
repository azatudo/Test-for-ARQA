import { test, expect } from '@playwright/test';

test.describe('Customers Page E2E', () => {
  test('filters customers by name', async ({ page }) => {
    await page.goto('/customers');

    const searchInput = page.getByPlaceholder('Search by name...');
    await searchInput.fill('Aigerim');

    // Проверяем, что клиент отображается
    await expect(page.getByText('Aigerim K.')).toBeVisible();

    // Другие клиенты должны быть скрыты
    await expect(page.getByText('Daniyar T.')).not.toBeVisible();
  });

  test('filters customers by city', async ({ page }) => {
    await page.goto('/customers');

    const cityInput = page.getByPlaceholder('Filter by city...');
    await cityInput.fill('Астана');

    await expect(page.getByText('Daniyar T.')).toBeVisible();
    await expect(page.getByText('Aigerim K.')).not.toBeVisible();
  });
});
