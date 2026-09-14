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

test('verify request detail page opens by clicking on a request', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('cement@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();

    await page.getByRole('link', { name: 'Requests' }).click();
    await page.getByRole('button', { name: 'Open requests' }).click();
    await page.getByRole('link', { name: 'Bricks open 1000 bricks' }).click();
    await expect(page).toHaveURL('https://dev6.yigserver.com:3000/procurement/12');
});

test('verify sending quotation', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('cement@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();

    await page.getByRole('link', { name: 'Requests' }).click();
    await page.getByRole('button', { name: 'Open requests' }).click();
    await page.goto('https://dev6.yigserver.com:3000/procurement');
    await page.getByRole('link', { name: 'Bricks open 1000 bricks' }).click();
    await page.getByRole('button', { name: 'Submit Quotation' }).click();
    await page.getByRole('spinbutton', { name: '850000' }).click();
    await page.getByRole('spinbutton', { name: '850000' }).fill('100000');
    await page.getByRole('spinbutton', { name: '7' }).click();
    await page.getByRole('spinbutton', { name: '7' }).fill('7');
    await page.getByRole('textbox', { name: 'Delivery terms, brand, etc.' }).click();
    await page.getByRole('textbox', { name: 'Delivery terms, brand, etc.' }).fill('Deliver bricks');
    await page.getByRole('button', { name: 'Send Quotation' }).click();
    await expect(page.getByRole('dialog', { name: 'Submit Quotation' })).not.toBeVisible();
    
});