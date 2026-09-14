import {test, expect} from '@playwright/test';

test('verify working of request button in navigation bar', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');

  
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('cement@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();

    await page.getByRole('link', { name: 'Requests' }).click();

    await expect(page).toHaveURL('https://dev6.yigserver.com:3000/procurement');
});

test('verify working of open request section', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('cement@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();

    await page.getByRole('link', { name: 'Requests' }).click();
    await page.getByRole('button', { name: 'Open requests' }).click();

    await expect(page.getByRole('button', { name: 'Open requests' })).toHaveClass(/bg-surface/);
});