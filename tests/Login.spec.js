import {test, expect} from '@playwright/test';

// test('Login with valid registered email address and password', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     await page.waitForURL('**/home');
//     await page.getByRole('link', { name: 'Your profile' }).click();
//     await expect(page.getByText('Email', { exact: true })).toBeVisible();
// });

// test('Verify login with both fields empty', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     await expect(page.getByText('Email is required')).toBeVisible();
//     await expect(page.getByText('Password is required')).toBeVisible();
// });

// test('Verify Login with only filling email field', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     const password = await page.getByRole('textbox', { name: 'Password' });
//     const message = await password.evaluate(el => el.validationMessage);
// });

// test('Verify Login with only filling password field', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     const email = await page.getByRole('textbox', { name: 'Email address' });
//     const message = await email.evaluate(el => el.validationMessage);
// });

// test('Verify Login with unregistered email address and valid password', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jacks@example');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
// });

// test('Verify Login with missing domain in email address and valid password', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jacks@example');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     const email = await page.getByRole('textbox', { name: 'Email address' });
//     const message = await email.evaluate(el => el.validationMessage);
// });

test("Login test with OR '1'='1' in email address and valid password", async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/login');
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill("'1'='1");
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    const email = await page.getByRole('textbox', { name: 'Email address' });
    const message = await email.evaluate(el => el.validationMessage);
});

test('verify login with OR 1=1 in password field and valid email', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/login');
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill("'1'='1");
    await page.getByRole('button', { name: 'Sign In →' }).click();
    const password = await page.getByRole('textbox', { name: 'Password' });
    const message = await password.evaluate(el => el.validationMessage);
});