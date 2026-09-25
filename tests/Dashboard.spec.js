import {test, expect} from '@playwright/test';

test('verify dashboard button works', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('verify if total number of users in dashboard increases if user is created', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.getByRole('link', { name: 'Dashboard' }).click();

    const email = `jack${Date.now()}@example.com`;

    const section = page.locator('[id="content.platform-overview::section"]');
    await expect(section).toBeVisible();

    const sectionText = await section.textContent();
    const initialCount = Number(sectionText.match(/Total users\s*(\d+)/)[1]);

    await page.getByRole('link', { name: 'Users' }).click();
    await page.getByRole('link', { name: 'New user' }).click();

    await page.getByRole('textbox', { name: 'Name*' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email address*' }).fill(email);
    await page.getByRole('textbox', { name: 'Password*' }).fill('Testuser@12');

    await page.getByRole('button', { name: 'Select an option' }).click();
    await page.getByRole('option', { name: 'supplier', exact: true }).click();

    await page.getByLabel('Default role').selectOption('supplier');

    await page.getByRole('button', { name: 'Create', exact: true }).click();

    await page.getByRole('link', { name: 'Dashboard' }).click();

    await expect(section).toContainText(`Total users ${initialCount + 1}`);
});

test('verify if revenue is displayed on dashborad', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page.getByText('Revenue NPR')).toBeVisible();
});

test('verify if lead statistics is displayed on dashborad', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page.getByText('Active leads')).toBeVisible();

});

test('Verify if graph of revenue generated is displayed on dashboard', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page.getByRole('heading', { name: 'Revenue (last 14 days)' })).toBeVisible();
});

test('verify if total number of subscription is displayed on dashboard', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).click();
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).click();
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page.getByText('Active subscriptions')).toBeVisible();
});
