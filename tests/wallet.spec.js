import {test, expect} from '@playwright/test';

test('verify working of wallet button in navigation bar', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('cement@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Wallet' }).click();
    await expect(page).toHaveURL('https://dev6.yigserver.com:3000/wallet');
});

test('verify the correct wallet balance', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    const email = `jack${Date.now()}@example.com`;
    await page.getByRole('link', { name: 'Create account' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await page.getByRole('button', { name: 'Skip for now' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Wallet' }).click();
    await expect(page.getByText('Token balance100tokensTokens')).toBeVisible();
    });

test('verify buy token for basic package', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    const email = `jack${Date.now()}@example.com`;
    await page.getByRole('link', { name: 'Create account' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await page.getByRole('button', { name: 'Skip for now' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Wallet' }).click();
    await page.getByRole('button', { name: 'Buy now' }).first().click();
    await expect(page.getByText('Token balance600tokensTokens')).toBeVisible();
});

test('verify buy token for standard package', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    const email = `jack${Date.now()}@example.com`;
    await page.getByRole('link', { name: 'Create account' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await page.getByRole('button', { name: 'Skip for now' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Wallet' }).click();
    await page.getByRole('button', { name: 'Buy now' }).nth(1).click();
    await expect(page.getByRole('link', { name: '2,100' })).toBeVisible();
});

test ('verify buy token for premium package', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    const email = `jack${Date.now()}@example.com`;
    await page.getByRole('link', { name: 'Create account' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await page.getByRole('button', { name: 'Skip for now' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Wallet' }).click();
    await page.getByRole('button', { name: 'Buy now' }).nth(2).click();
    await expect(page.getByRole('link', { name: '5,100' })).toBeVisible();
});