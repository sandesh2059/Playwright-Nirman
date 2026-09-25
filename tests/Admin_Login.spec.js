import {test, expect} from '@playwright/test';

test('login with valid admin email and password', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
    await expect(page).toHaveURL('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin');
    
});

test('Login by leaving both fields empty', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByLabel('Email address')).toHaveJSProperty('validity.valid', false);
});

test('Login by leaving email field empty', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
    await expect(page.getByLabel('Email address')).toHaveJSProperty('validity.valid', false);
});

test('Login by leaving password field empty', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Email address*' }).press('Enter');
    await expect(page.getByRole('textbox', { name: 'Password*' })).toHaveJSProperty('validity.valid', false);
});

test('Login by unregistered email and valid password', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('jacks@example');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
    await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
});

test('Login with invalid email format like missing @ or domain and valid password', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('jacksexample');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
    await expect(page.getByLabel('Email address')).toHaveJSProperty('validity.typeMismatch',true);
});

test('verify if email is case insensitive', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@Nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
    await expect(page).toHaveURL('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin');
});

test('verify if password is case sensitive', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('PASSWORD');
    await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
    await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
});

test('verify leading and trailing spaces in password', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill(' password ');
    await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
    await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
});

test('verify leading and trailing spaces in email', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill(' admin@nirman.ai ');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
    await expect(page).toHaveURL('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin');
});

test('verify navigating back to login after successful login', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
    await page.waitForURL('**/admin');
    await page.goBack();
    await expect(page).toHaveURL('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin');
});

test('verify unsuccessful login multiple times', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@Nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByRole('heading', { name: /Too many login attempts/i })).toBeVisible();
});