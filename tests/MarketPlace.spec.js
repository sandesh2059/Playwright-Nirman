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

test('verify search using a valid engineer skill', async ({page}) => {
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
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('geotechnician');
  await expect(page.getByText('Geotechnical')).toBeVisible();
});

test('verify search with partial engineer name', async ({page}) => {
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
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('jack');
  await expect(page.getByRole('heading', { name: 'Jack sparrow', exact: true })).toBeVisible();
});

test('verify search with partial engineer skill', async ({page}) => {
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
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('geotechn');
  await expect(page.getByText('Geotechnical')).toBeVisible();
});

test('verify search using valid contractor name', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Contractors' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('MR Contractor');
  await expect(page.getByRole('heading', { name: 'MR Contractor', exact: true })).toBeVisible();
});

test('verify search using valid contractor skill', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Contractors' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('building');
  await expect(page.getByText('building')).toBeVisible();
});

test('verify search using partial contractor name', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Contractors' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('MR');
  await expect(page.getByRole('heading', { name: 'MR Contractor', exact: true })).toBeVisible();
});

test('verify search using partial contractor skill', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Contractors' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('build');
  await expect(page.getByText('building')).toBeVisible();
});

test('verify search using valid supplier name', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Suppliers' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('Himalayan Cement & Steel Depot');
  await expect(page.getByRole('heading', { name: 'Himalayan Cement & Steel Depot', exact: true })).toBeVisible();
});

test('verify search using valid product name', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'suppliers' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('Cement');
  await expect(page.getByText('Cement')).toBeVisible();
});

test('verify search with empty search', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await expect(page.getByRole('textbox', { name: 'Search by name or skill…' })).toHaveValue('');
});

test('Verify search with leading or trailing spaces', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Contractors' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('   MR   ');
  await expect(page.getByRole('heading', { name: 'MR Contractor', exact: true })).toBeVisible();
});

test('Verify search with different letter case', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Contractors' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('mR Contractor');
  await expect(page.getByRole('heading', { name: 'MR Contractor', exact: true })).toBeVisible();
});

test('Verify engineer name or skill in other sections', async ({page}) => {
  //Note that the name or skill that you are searching should not match with any name or skill of contractors or suppliers. If it matches, then the test will fail.
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Market', exact: true }).click();
  await page.getByRole('button', { name: 'Contractors' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).click();
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('Jack sparrow');
  await expect(page.getByText('No results')).toBeVisible();
});

test('verify contractor name or skill in other sections', async ({page}) => {
  //Note that the name or skill that you are searching should not match with any name or skill of engineers or suppliers. If it matches, then the test will fail.
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
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('MR Contractor');
  await expect(page.getByText('No results')).toBeVisible();
});

test('verify supplier name or skill in other sections', async ({page}) => {
  //Note that the name or skill that you are searching should not match with any name or skill of engineers or contractors. If it matches, then the test will fail.
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
  await page.getByRole('textbox', { name: 'Search by name or skill…' }).fill('Himalayan Cement & Steel Depot');
  await expect(page.getByText('No results')).toBeVisible();
});