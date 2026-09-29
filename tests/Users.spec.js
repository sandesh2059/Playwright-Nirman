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

// test('create user by selecting contractor role', async ({page}) => {
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
//     await page.getByRole('option', { name: 'contractor', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('contractor');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
// });

// test('create user by selecting supplier role', async ({page}) => {
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

// test('create user by selecting engineer role', async ({page}) => {
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
//     await page.getByRole('option', { name: 'engineer', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('engineer');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
// });

// test('create user by selecting property owner role', async ({page}) => {
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
//     await page.getByRole('option', { name: 'property owner', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('owner');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
// });

// test('create user by selecting status as active', async ({page}) => {
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
//     await page.getByLabel('Status*').selectOption('active');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
// });

// test('create user by selecting status as pending', async ({page}) => {
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
//     await page.getByLabel('Status*').selectOption('pending');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
// });

// test('create user by selecting status as suspended', async ({page}) => {
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
//     await page.getByLabel('Status*').selectOption('suspended');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'supplier', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('supplier');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
// });

// test('search user by full name', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('jack sparrow');
//     await expect(page.getByRole('link', { name: 'jack sparrow jack1790586894215@example.com' })).toBeVisible();
// });

// test('search by partial name', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('jack');
//     await expect(page.getByRole('link', { name: 'jack sparrow jack1790586894215@example.com' })).toBeVisible();
// });

// test('search user by email', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('jack1790586894215@example.com');
//     await expect(page.getByRole('link', { name: 'jack sparrow jack1790586894215@example.com' })).toBeVisible();
// });

// test('search with different letter case name', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('JAcK SpArROW');
//     await expect(page.getByRole('link', { name: 'jack sparrow jack1790586894215@example.com' })).toBeVisible();
// });

// test('search user with different letter case email', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('jAcK1790586894215@example.com');
//     await expect(page.getByRole('link', { name: 'jack sparrow jack1790586894215@example.com' })).toBeVisible();
// });




// test('search for non existing users', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await expect(page.getByRole('row', { name: /jack sparrow/ }).first()).toBeVisible();
//     await page.waitForLoadState('networkidle');
//     const searchBox = page.getByRole('searchbox', { name: 'Search', exact: true });
//     await expect(async () => {
//         await searchBox.clear();
//         await searchBox.pressSequentially('asjflsajdfkl', { delay: 50 });
//         await expect(page.getByRole('row', { name: /jack sparrow/ })).toHaveCount(0, { timeout: 3000 });
//     }).toPass({ timeout: 20000 });
//     await expect(page.getByRole('heading', { name: 'No users' })).toBeVisible();
// });

// test('search user with leading and trailing spaces in name', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
//     await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('  jack  ');
//     await expect(page.getByRole('link', { name: 'jack sparrow jack1790586894215@example.com' })).toBeVisible();
// });

// test('search users by active status', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await expect(page.getByRole('row', { name: /jack sparrow/ }).first()).toBeVisible();
//     const statusSelect = page.locator('[id="tableFiltersForm.status.value"]');
//     const filterButton = page.getByRole('button', { name: 'Filter' });
//     await expect(async () => {
//         if (!(await statusSelect.isVisible())) {
//             await filterButton.click();
//         }
//         await expect(statusSelect).toBeVisible({ timeout: 2000 });
//     }).toPass({ timeout: 15000 });
//     await statusSelect.selectOption('active');
//     await page.getByRole('button', { name: 'Apply filters' }).click();
//     await expect(
//         page.getByRole('row').filter({ hasText: /suspended|pending/ })
//     ).toHaveCount(0);
//     await expect(
//         page.getByRole('row').filter({ hasText: 'active' }).first()
//     ).toBeVisible();
// });

// test('search users by suspended status', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await expect(page.getByRole('row', { name: /jack sparrow/ }).first()).toBeVisible();
//     const statusSelect = page.locator('[id="tableFiltersForm.status.value"]');
//     const filterButton = page.getByRole('button', { name: 'Filter' });
//     await expect(async () => {
//         if (!(await statusSelect.isVisible())) {
//             await filterButton.click();
//         }
//         await expect(statusSelect).toBeVisible({ timeout: 2000 });
//     }).toPass({ timeout: 15000 });
//     await statusSelect.selectOption('suspended');
//     await page.getByRole('button', { name: 'Apply filters' }).click();
//     await expect(
//         page.getByRole('row').filter({ hasText: /active|pending/ })
//     ).toHaveCount(0);
//     await expect(
//         page.getByRole('row').filter({ hasText: 'suspended' }).first()
//     ).toBeVisible();
// });

// test('search users by pending status', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await expect(page.getByRole('row', { name: /jack sparrow/ }).first()).toBeVisible();
//     const statusSelect = page.locator('[id="tableFiltersForm.status.value"]');
//     const filterButton = page.getByRole('button', { name: 'Filter' });
//     await expect(async () => {
//         if (!(await statusSelect.isVisible())) {
//             await filterButton.click();
//         }
//         await expect(statusSelect).toBeVisible({ timeout: 2000 });
//     }).toPass({ timeout: 15000 });
//     await statusSelect.selectOption('pending');
//     await page.getByRole('button', { name: 'Apply filters' }).click();
//     await expect(
//         page.getByRole('row').filter({ hasText: /active|suspended/ })
//     ).toHaveCount(0);
//     await expect(
//         page.getByRole('row').filter({ hasText: 'pending' }).first()
//     ).toBeVisible();
// });

// test('edit username', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'Edit' }).first().click();
//     await page.getByRole('textbox', { name: 'Name*' }).click();
//     await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparroow');
//     await page.getByRole('button', { name: 'Save changes' }).click();
//     await expect(page.getByRole('heading', { name: 'Saved' })).toBeVisible();
// });

// test('edit email', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'Edit' }).first().click();
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('jack2r85127821748923@example.com');
//     await page.getByRole('button', { name: 'Save changes' }).click();
//     await expect(page.getByRole('heading', { name: 'Saved' })).toBeVisible();
// });

// test('edit phone number', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'Edit' }).first().click();
//     await page.getByRole('textbox', { name: 'Phone' }).click();
//     await page.getByRole('textbox', { name: 'Phone' }).fill('123456782384792749890');
//     await page.getByRole('button', { name: 'Save changes' }).click();
//     await expect(page.getByRole('heading', { name: 'Saved' })).toBeVisible();
// });

// test('Edit or change default role', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'Edit' }).first().click();
//     await page.getByLabel('Default role').selectOption('engineer');
//     await page.getByRole('button', { name: 'Save changes' }).click();
//     await expect(page.getByRole('heading', { name: 'Saved' })).toBeVisible();
    
// })

// test('change status', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'Edit' }).first().click();
//     await page.getByLabel('Status*').selectOption('suspended');
//     await page.getByRole('button', { name: 'Save changes' }).click();
//     await expect(page.getByRole('heading', { name: 'Saved' })).toBeVisible();
// });

// test('edit with invalid email format', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     const email = `jack${Date.now()}example`;
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'Edit' }).first().click();
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill(email);
//     await page.getByRole('button', { name: 'Save changes' }).click();
//     await expect(page.getByLabel('Email address')).toHaveJSProperty('validity.valid', false);
// });

// test('clear phone number', async ({ page }) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).click();
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).click();
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'Edit' }).first().click();
//     await page.getByRole('textbox', { name: 'Phone' }).clear();
//     await page.getByRole('button', { name: 'Save changes' }).click();
//     await expect(page.getByRole('heading', { name: 'Saved' })).toBeVisible();
// });

test('edit with duplicate email', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByRole('link', { name: 'Edit' }).first().click();
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('jack16@example.com');
    await page.getByRole('button', { name: 'Save changes' }).click();
    await expect(page.getByText('The email address has already been taken.')).toBeVisible(); 
});

test('cancel editing', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByRole('link', { name: 'Edit' }).first().click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page.getByRole('link', { name: 'Users' })).toBeVisible();
});

test('delete user', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(1).check();
    await page.getByRole('button', { name: 'Bulk actions' }).click();
    await page.getByRole('button', { name: 'Delete selected' }).click();
    await page.getByRole('button', { name: 'Delete', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Deleted' })).toBeVisible();
});

test('cancel delete operation', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(1).check();
    await page.getByRole('button', { name: 'Bulk actions' }).click();
    await page.getByRole('button', { name: 'Delete selected' }).click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page.getByRole('link', { name: 'Users' })).toBeVisible();
});

test('delete multiple users', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(1).check();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(2).check();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(3).check();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(4).check();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(5).check();

    await page.getByRole('button', { name: 'Bulk actions' }).click();
    await page.getByRole('button', { name: 'Delete selected' }).click();
    await page.getByRole('button', { name: 'Delete', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Deleted' })).toBeVisible();
});
    
test('cancel delete multiple users', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(1).check();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(2).check();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(3).check();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(4).check();
    await page.getByRole('checkbox', {name: /Select\/deselect item \d+ for/}).nth(5).check();

    await page.getByRole('button', { name: 'Bulk actions' }).click();
    await page.getByRole('button', { name: 'Delete selected' }).click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page.getByRole('link', { name: 'Users' })).toBeVisible();
});

test('display 5 users per page', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByLabel('Per page 5 10 25').selectOption('5');
    await expect(page.getByLabel('Per page 5 10 25')).toBeVisible();
});

test('display 10 users per page', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByLabel('Per page 5 10 25').selectOption('10');
    await expect(page.getByLabel('Per page 5 10 25')).toBeVisible();
});

test('display 25 users per page', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByLabel('Per page 5 10 25').selectOption('25');
    await expect(page.getByLabel('Per page 5 10 25')).toBeVisible();
});

test('display 50 users per page', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByLabel('Per page 5 10 25').selectOption('50');
    await expect(page.getByLabel('Per page 5 10 25')).toBeVisible();
});