import {test, expect} from '@playwright/test';

test('Verify working of market button', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await expect(page).toHaveURL('https://dev6.yigserver.com:3000/marketplace');
});

test('Verify engineer section can be selected', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Engineers' }).click();
  await expect(page.getByRole('button', { name: 'Engineers' })).toHaveClass(/bg-surface/);
});

test('Verify contractors section can be selected', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Contractors' }).click();
  await expect(page.getByRole('button', { name: 'Contractors' })).toHaveClass(/bg-surface/);
});

test('Verify suppliers section can be selected', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Suppliers' }).click();
  await expect(page.getByRole('button', { name: 'Suppliers' })).toHaveClass(/bg-surface/);
});

test('verify search with a valid engineer name', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Engineers' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('jack sparrow');
  await expect(page.getByRole('heading', { name: 'Jack sparrow', exact: true })).toBeVisible();
});