import {test, expect} from '@playwright/test';

test('verify working of site button in navigation bar', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Site' }).click();
    await expect(page).toHaveURL('https://dev6.yigserver.com:3000/sites');
});


test('Creating new sites by filling all the fields', async ({page}) => {
    const siteName = `Sano ghar upgrade ${Date.now()}`;
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'New site' }).first().click();
    await page.getByRole('textbox', { name: 'Villa Extension' }).click();
    await page.getByRole('textbox', { name: 'Villa Extension' }).fill(siteName);
    await page.getByRole('textbox', { name: 'Mr. Sharma' }).click();
    await page.getByRole('textbox', { name: 'Mr. Sharma' }).fill('Jack sparrow');
    await page.getByRole('combobox').selectOption('Kathmandu');
    await page.locator('input[type="date"]').fill('2026-09-11');
    await page.getByRole('spinbutton', { name: '4500000' }).click();
    await page.getByRole('spinbutton', { name: '4500000' }).fill('1120202');
    await page.getByRole('button', { name: 'Create site' }).click();
    await expect(page.getByRole('heading', { name: siteName})).toBeVisible();
    await page.getByRole('navigation').getByRole('link', { name: 'Sites' }).click();
    await expect(page.getByRole('link', { name:  `${siteName} Jack` })).toBeVisible();
});

test('verify creating new sites by leaving all fields empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'New site' }).first().click();
    await page.getByRole('button', { name: 'Create site' }).click();
    await expect(page.getByRole('textbox', { name: 'Villa Extension' })).toHaveAttribute('required', '');
});

test('verify creating new sites by filling only the site name field', async ({page}) => {
    const siteName = `Sano ghar upgrade ${Date.now()}`;
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'New site' }).first().click();
    await page.getByRole('textbox', { name: 'Villa Extension' }).click();
    await page.getByRole('textbox', { name: 'Villa Extension' }).fill(siteName);
    await page.getByRole('button', { name: 'Create site' }).click();
    await expect(page.getByRole('heading', { name: siteName})).toBeVisible();
    await page.getByRole('navigation').getByRole('link', { name: 'Sites' }).click();
    await expect(page.getByRole('link', { name:  siteName })).toBeVisible();
});