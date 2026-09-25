import {test, expect} from '@playwright/test';

// test('Create users by filling all fields', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     const email = `jack${Date.now()}@example.com`;
//     const phone = `1${Date.now()}`;
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparrow');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill(email);
//     await page.getByRole('textbox', { name: 'Phone' }).click();
//     await page.getByRole('textbox', { name: 'Phone' }).fill(phone);
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
// });

// test('create user by filling only the mandatory fields', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     const email = `jack${Date.now()}@example.com`;
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparrow');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill(email);
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
// });

// test('create user without filling name field', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     const email = `jack${Date.now()}@example.com`;
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill(email);
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByLabel('Name')).toHaveJSProperty('validity.valid', false);
// });

// test('create user without filling email field', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparrow');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByLabel('Email address')).toHaveJSProperty('validity.valid', false);
// });

// test('create user without phone number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     const email = `jack${Date.now()}@example.com`;
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparrow');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill(email);
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
// });

// test('create user without password', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     const email = `jack${Date.now()}@example.com`;
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparrow');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill(email);
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('textbox', { name: 'Password*' })).toHaveJSProperty('validity.valid', false);
// });

// test('create user with invalid email format', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     const email = `jack${Date.now()}@example`;
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparrow');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill(email);
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('textbox', { name: 'Email address*' })).toHaveJSProperty('validity.valid', false);
// });

// test('Create user with duplicate email field', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     // const email = `jack${Date.now()}@example.com`;
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparrow');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('jack12@example.com');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('The email address has already')).toBeVisible();
// });

// test('verify password field masking', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
//     await expect(page.getByRole('textbox', { name: 'Password*' })).toHaveJSProperty('type', 'password');
// });

// test('verify show password button is working', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
//     await expect(page.getByRole('textbox', { name: 'Password*' })).toHaveJSProperty('type', 'password');
//     await page.getByRole('button', { name: 'Show password' }).click();
//     await expect(page.getByRole('textbox', { name: 'Password*' })).toHaveJSProperty('type', 'text');
// });

test('create user by selecting contractor role', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    const email = `jack${Date.now()}@example.com`;
    const phone = `1${Date.now()}`;
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByRole('link', { name: 'New user' }).click();
    await page.getByRole('textbox', { name: 'Name*' }).click();
    await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill(email);
    await page.getByRole('textbox', { name: 'Phone' }).click();
    await page.getByRole('textbox', { name: 'Phone' }).fill(phone);
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Select an option' }).click();
    await page.getByRole('option', { name: 'contractor', exact: true }).click();
    await page.getByLabel('Default role').selectOption('contractor');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('status')).toContainText('Created');
});