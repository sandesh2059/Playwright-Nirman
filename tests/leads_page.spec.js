import {test , expect} from '@playwright/test';

test('Verify the working of lead page button', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Leads' }).click();
    await expect(page.getByRole('heading', { name: 'Leads' })).toBeVisible();
});

test('verify search using valid project name', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('heading', { name: 'Leads' }).click();
  await page.getByRole('textbox', { name: 'Search projects…' }).click();
  await page.getByRole('textbox', { name: 'Search projects…' }).fill('sano ghar');
  await expect(page.getByRole('link', { name: 'active sano ghar NPR 6,554 –' })).toBeVisible();
});