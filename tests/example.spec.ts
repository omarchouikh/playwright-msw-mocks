import { test, expect } from '../msw-worker/worker';

test('mock api with msw plugin', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/api-mocking');
  await expect(page.getByText('93 93 93')).toBeVisible();
});
