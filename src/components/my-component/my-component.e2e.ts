import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.describe('my-component', () => {
  test('should allow page.goto', async ({ page }) => {
    // The path here is the path to the www output relative to the dev server root directory
    await page.goto('/components/my-component/test/my-component.e2e.html');
    await expect(page.locator("div")).toHaveText(
      "Hello, World! I'm Stencil"
    )
    });

  test('should allow page.setContent', async ({ page }) => {
    await page.setContent('<my-component first="Stencil"></my-component>');

    await expect(page.locator("div")).toHaveText(
      "Hello, World! I'm Stencil"
    )
  });
});
