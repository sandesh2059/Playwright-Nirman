import {test, expect} from '@playwright/test';

test('verify working of site button in navigation bar', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Site' }).click();
    await expect(page).toHaveURL('https://dev6.yigserver.com:3000/sites');
});


test('Creating new sites by filling all the fields', async ({page}) => {
    const siteName = `Sano ghar upgrade ${Date.now()}`;
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'New site' }).first().click();
    await page.getByRole('textbox', { name: 'Villa Extension' }).click();
    await page.getByRole('textbox', { name: 'Villa Extension' }).fill(siteName);
    await page.getByRole('textbox', { name: 'Mr. Sharma' }).click();
    await page.getByRole('textbox', { name: 'Mr. Sharma' }).fill('Jack sparrow');
    await page.getByRole('combobox').selectOption('Kathmandu');
    await page.locator('input[type="date"]').fill('2026-09-11');
    await page.getByRole('spinbutton', { name: '4500000' }).click();
    await page.getByRole('spinbutton', { name: '4500000' }).fill('1120202');
    await page.getByRole('button', { name: 'Create site' }).click();
    await expect(page.getByRole('heading', { name: siteName})).toBeVisible();
    await page.getByRole('navigation').getByRole('link', { name: 'Sites' }).click();
    await expect(page.getByRole('link', { name:  `${siteName} Jack` })).toBeVisible();
});

test('verify creating new sites by leaving all fields empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'New site' }).first().click();
    await page.getByRole('button', { name: 'Create site' }).click();
    await expect(page.getByRole('textbox', { name: 'Villa Extension' })).toHaveAttribute('required', '');
});

test('verify creating new sites by filling only the site name field', async ({page}) => {
    const siteName = `Sano ghar upgrade ${Date.now()}`;
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'New site' }).first().click();
    await page.getByRole('textbox', { name: 'Villa Extension' }).click();
    await page.getByRole('textbox', { name: 'Villa Extension' }).fill(siteName);
    await page.getByRole('button', { name: 'Create site' }).click();
    await expect(page.getByRole('heading', { name: siteName})).toBeVisible();
    await page.getByRole('navigation').getByRole('link', { name: 'Sites' }).click();
    await expect(page.getByRole('link', { name:  siteName })).toBeVisible();
});


/* Cannot automate this because there is a bug that does not increase the progress percentage even after adding progress 
test('verify adding progress on site', async ({page}) => {
    const siteName = `Sano ghar upgrade ${Date.now()}`;
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'Sano ghar upgrade 1789109077959 active 0%' }).click();
    await page.getByRole('button', { name: 'Progress' }).click();
    await page.getByRole('button', { name: 'Progress' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('spinbutton', { name: '45' }).click();
    await page.getByRole('spinbutton', { name: '45' }).fill('15');
    await page.getByRole('textbox', { name: 'Slab cast on 2nd floor' }).click();
    await page.getByRole('textbox', { name: 'Slab cast on 2nd floor' }).fill('foundation dug up');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('foundation dug up')).toBeVisible();
});
*/


test('Verify adding new milestone as completed', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'Sano ghar upgrade 1789108405840 Jack sparrow active Kathmandu 0%' }).click();
    await page.getByRole('button', { name: 'Milestones' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    const MilestoneName = `Milestone ${Date.now()}`;
    await page.getByRole('textbox', { name: 'Foundation complete' }).click();
    await page.getByRole('textbox', { name: 'Foundation complete' }).fill(MilestoneName);
    await page.locator('input[type="date"]').fill('2026-09-11');
    await page.getByRole('combobox').selectOption('completed');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText(`${MilestoneName}Due 2026-09-11completed`)).toBeVisible();
});

test('verify adding new milestone as in progress', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'Sano ghar upgrade 1789108405840 Jack sparrow active Kathmandu 0%' }).click();
    await page.getByRole('button', { name: 'Milestones' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    const MilestoneName = `Milestone ${Date.now()}`;
    await page.getByRole('textbox', { name: 'Foundation complete' }).click();
    await page.getByRole('textbox', { name: 'Foundation complete' }).fill(MilestoneName);
    await page.locator('input[type="date"]').fill('2026-09-11');
    await page.getByRole('combobox').selectOption('in_progress');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText(`${MilestoneName}Due 2026-09-11in progress`)).toBeVisible();
});

test('verify adding new milestone as delayed', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'Sano ghar upgrade 1789108405840 Jack sparrow active Kathmandu 0%' }).click();
    await page.getByRole('button', { name: 'Milestones' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    const MilestoneName = `Milestone ${Date.now()}`;
    await page.getByRole('textbox', { name: 'Foundation complete' }).click();
    await page.getByRole('textbox', { name: 'Foundation complete' }).fill(MilestoneName);
    await page.locator('input[type="date"]').fill('2026-09-11');
    await page.getByRole('combobox').selectOption('delayed');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText(`${MilestoneName}Due 2026-09-11delayed`)).toBeVisible();
});

test('verify adding new milestone as pending', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'Sano ghar upgrade 1789108405840 Jack sparrow active Kathmandu 0%' }).click();
    await page.getByRole('button', { name: 'Milestones' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    const MilestoneName = `Milestone ${Date.now()}`;
    await page.getByRole('textbox', { name: 'Foundation complete' }).click();
    await page.getByRole('textbox', { name: 'Foundation complete' }).fill(MilestoneName);
    await page.locator('input[type="date"]').fill('2026-09-11');
    await page.getByRole('combobox').selectOption('pending');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText(`${MilestoneName}Due 2026-09-11pending`)).toBeVisible();
});

test('update a milestone', async ({page}) => {

    // there is no edit button so this test fails

    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'Sano ghar upgrade 1789108405840 Jack sparrow active Kathmandu 0%' }).click();
    await page.getByRole('button', { name: 'Milestones' }).click();
    await page.getByRole('button', { name: 'Edit' }).click();
    const MilestoneName = `Milestone ${Date.now()}`;
    await page.getByRole('textbox', { name: 'Foundation complete' }).click();
    await page.getByRole('textbox', { name: 'Foundation complete' }).fill(MilestoneName);
    await page.locator('input[type="date"]').fill('2026-09-11');
    await page.getByRole('combobox').selectOption('in progress');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText(`${MilestoneName}Due 2026-09-11in progress`)).toBeVisible();
});

test('Verify adding a new expense', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'Sano ghar upgrade 1789108405840 Jack sparrow active Kathmandu 0%' }).click();
    await page.getByRole('button', { name: 'Expenses' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('spinbutton', { name: '50000' }).click();
    await page.getByRole('spinbutton', { name: '50000' }).fill('5000');
    await page.locator('input[type="date"]').fill('2026-09-06');
    await page.getByRole('textbox', { name: 'Cement purchase' }).click();
    await page.getByRole('textbox', { name: 'Cement purchase' }).fill('Paper purchased');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('paragraph').filter({ hasText: 'NPR' })).toBeVisible();
});

test('delete and existing expense', async ({page}) => {

    // there is no delete button so this test will fail
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'Sano ghar upgrade 1789108405840 Jack sparrow active Kathmandu 0%' }).click();
    await page.getByRole('button', { name: 'Expenses' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await expect(page.getByRole('paragraph').filter({ hasText: 'NPR' })).not.toBeVisible();
});

test('delete a site', async ({page}) => {

    //there is no delete option so this test will fail
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack21@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Sites' }).click();
    await page.getByRole('link', { name: 'Sano ghar upgrade 1789108405840 Jack sparrow active Kathmandu 0%' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await expect(page.getByRole('link', { name: 'Sano ghar upgrade 1789108405840 Jack sparrow active Kathmandu 0%' })).not.toBeVisible();
});