import {test, expect} from '@playwright/test';

test('verify working of notification page', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('cement@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
    await page.goto('https://dev6.yigserver.com:3000/notifications');
});

test('verify the project detail page opens when clicked on proposal notification', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
    await page.getByRole('button', { name: 'New proposal received You received a proposal of NPR 12,212,313 on "sano ghar' }).click();
    await expect(page).toHaveURL('https://dev6.yigserver.com:3000/projects/41');
});

test('verify working of mark all read button', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
    const markAllRead = page.getByRole('button', { name: 'Mark all read' });
    if (await markAllRead.isVisible()) {await markAllRead.click();}
    await expect(markAllRead).not.toBeVisible();
});

test('verify notification is received if a proposal is rejected', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
    await page.getByRole('button', { name: 'New proposal received You received a proposal of NPR 1,200,303 on "sano ghar".' }).click();
    await page.getByRole('button', { name: 'Reject' }).click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await page.getByRole('button', { name: 'Sign out' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack20@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
    await expect(page.getByRole('button', { name: 'Proposal rejected Your' })).toBeVisible();
});