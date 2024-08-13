import { test, } from '@playwright/test';



test('spyrosoft website', async ({ page }) => {

  await page.goto('https://spyro-soft.com/', { timeout: 60000 });


});
