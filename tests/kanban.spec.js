import { test, expect } from '@playwright/test';

test('Kanban board loads correctly', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Target only the main heading specifically
  await expect(page.locator('h2')).toHaveText('Real-time Kanban Board');
});

test('Add task button exists', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const button = page.getByText('Add Task');
  await expect(button).toBeVisible();
});
