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

// test("Login test with OR '1'='1' in email address and valid password", async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill("'1'='1");
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     const email = await page.getByRole('textbox', { name: 'Email address' });
//     const message = await email.evaluate(el => el.validationMessage);
// });

// test('verify login with OR 1=1 in password field and valid email', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill("'1'='1");
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     const password = await page.getByRole('textbox', { name: 'Password' });
//     const message = await password.evaluate(el => el.validationMessage);
// });

// test('Verify login with valid email and invalid password', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
// });

// test('Verify Login with valid password but with trailing or leading spaces in password field', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill(' Testuser@12 ');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
// });

// test('Verify password field is masked', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     const passwordField = await page.getByRole('textbox', { name: 'Password' });
//     const typeAttribute = await passwordField.getAttribute('type');
//     expect(typeAttribute).toBe('password');
// });

// test('Verify successful login redirects to the home page', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     await page.waitForURL('**/home');
// });

// test('Verify password shorter than 8 characters', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('Testuser');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
// });

// test('Verify password is case sensitive', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com:3000/login');
//     await page.getByRole('textbox', { name: 'Email address' }).click();
//     await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('testuser@12');
//     await page.getByRole('button', { name: 'Sign In →' }).click();
//     await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
// });

test('verify navigating back by clicking the back button in browser after login', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.goto('https://dev6.yigserver.com:3000/login');
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.waitForURL('**/home');
    await page.goBack();
    await expect(page).toHaveURL('https://dev6.yigserver.com:3000');
    
    
});

test('Verify Login with Enter key press after filling both fields', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/login');
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.keyboard.press('Enter');
    await page.waitForURL('**/home');
});

test('Verify Login button cannot be clicked multiple times rapidly', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/login');
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.waitForURL('**/home');
});

test('Verify multiple failed login attempts with incorrect credentials', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/login');
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@1222222');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await expect(page.getByText('Too Many Attempts.')).toBeVisible();
        
    
});