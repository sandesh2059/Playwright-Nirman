import {test, expect} from '@playwright/test';

test('Verify signout after sign in', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Your profile' }).click();
  await page.getByRole('button', { name: 'Sign out' }).click();
  await page.waitForURL('**/login');
});

test('verify navigating back after signout', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Your profile' }).click();
  await page.getByRole('button', { name: 'Sign out' }).click();
  await page.goBack();
  await expect(page).toHaveURL('https://dev6.yigserver.com:3000/login');
});

test('verify signin after signout', async ({page}) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Your profile' }).click();
  await page.getByRole('button', { name: 'Sign out' }).click();
  await page.waitForURL('**/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.waitForURL('**/home');
});


test('verify session in other tabs after signout in one tab', async ({page, context}) => {
    const page1 = await context.newPage();
    await page1.goto('https://dev6.yigserver.com:3000/');
    await page1.getByRole('link', { name: 'I already have an account' }).click();
    await page1.getByRole('textbox', { name: 'Email address' }).click();
    await page1.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page1.getByRole('textbox', { name: 'Password' }).click();
    await page1.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page1.getByRole('button', { name: 'Sign In →' }).click();
    await page1.getByRole('link', { name: 'Your profile' }).click();
    const page2 = await context.newPage();
    await page2.goto('https://dev6.yigserver.com:3000/home');
    await page2.getByRole('link', { name: 'Your profile' }).click();
    await page1.getByRole('button', { name: 'Sign out' }).click();
    await page2.reload();
    await expect(page2).toHaveURL('https://dev6.yigserver.com:3000/login');
});

