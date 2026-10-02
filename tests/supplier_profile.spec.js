import {test, expect} from '@playwright/test';

test('verify working of supplier profile button in navigation bar', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await expect(page.getByRole('heading', { name: 'Supplier Profiles' })).toBeVisible();
});

test('verify creating supplier profile by filling all mandatory fields', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    const business = page.getByRole('textbox', { name: 'Business name*' });

    await business.fill('cement supply');
    const verification = page.getByLabel('Verification status*');
    await verification.selectOption('pending');
    const subscription = page.getByLabel('Subscription tier*');
    await subscription.selectOption('silver');
    const rating = page.getByRole('spinbutton', { name: 'Rating*' });
    await rating.fill('9');
    const reviews = page.getByRole('spinbutton', { name: 'Reviews count*' });
    await reviews.fill('10');
    await expect(page.getByLabel('User*')).toHaveValue('237');
    await expect(business).toHaveValue('cement supply');
    await expect(verification).toHaveValue('pending');
    await expect(subscription).toHaveValue('silver');
    await expect(rating).toHaveValue('9');
    await expect(reviews).toHaveValue('10');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});


test('delete supplier profile0', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile by filling all mandatory fields and optional fields', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    const business = page.getByRole('textbox', { name: 'Business name*' });
    await business.fill('cement supply');
    const verification = page.getByLabel('Verification status*');
    await verification.selectOption('pending');
    const subscription = page.getByLabel('Subscription tier*');
    await subscription.selectOption('silver');
    const rating = page.getByRole('spinbutton', { name: 'Rating*' });
    await rating.fill('9');
    const reviews = page.getByRole('spinbutton', { name: 'Reviews count*' });
    await reviews.fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByLabel('User*')).toHaveValue('237');
    await expect(business).toHaveValue('cement supply');
    await expect(verification).toHaveValue('pending');
    await expect(subscription).toHaveValue('silver');
    await expect(rating).toHaveValue('9');
    await expect(reviews).toHaveValue('10');
    await expect(page.getByRole('textbox', { name: 'Reg no' })).toHaveValue('reg12');
    await expect(page.getByRole('textbox', { name: 'Description' })).toHaveValue('i am supplier');
    await expect(page.getByRole('textbox', { name: 'City' })).toHaveValue('kathmandu');
    await expect(page.getByRole('textbox', { name: 'District' })).toHaveValue('kathmandu');
    await expect(page.getByRole('textbox', { name: 'Service areas' })).toHaveValue('all over nepal');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile1', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('create supplier profile without selecting user and filling mandatory fields', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    const business = page.getByRole('textbox', { name: 'Business name*' });
    await business.fill('cement supply');
    const verification = page.getByLabel('Verification status*');
    await verification.selectOption('pending');
    const subscription = page.getByLabel('Subscription tier*');
    await subscription.selectOption('silver');
    const rating = page.getByRole('spinbutton', { name: 'Rating*' });
    await rating.fill('9');
    const reviews = page.getByRole('spinbutton', { name: 'Reviews count*' });
    await reviews.fill('10');
    await expect(page.getByLabel('User*')).toHaveValue('');
    await expect(business).toHaveValue('cement supply');
    await expect(verification).toHaveValue('pending');
    await expect(subscription).toHaveValue('silver');
    await expect(rating).toHaveValue('9');
    await expect(reviews).toHaveValue('10');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    const user = page.getByLabel('User*');
    await expect(user).toHaveJSProperty('validity.valid', false);
});

test('verify creating supplier profile by filling all mandatory fields and leaving business field empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');

    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    const verification = page.getByLabel('Verification status*');
    await verification.selectOption('pending');
    const subscription = page.getByLabel('Subscription tier*');
    await subscription.selectOption('silver');
    const rating = page.getByRole('spinbutton', { name: 'Rating*' });
    await rating.fill('9');
    const reviews = page.getByRole('spinbutton', { name: 'Reviews count*' });
    await reviews.fill('10');
    await expect(page.getByLabel('User*')).toHaveValue('237');
    await expect(verification).toHaveValue('pending');
    await expect(subscription).toHaveValue('silver');
    await expect(rating).toHaveValue('9');
    await expect(reviews).toHaveValue('10');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('textbox', { name: 'Business name*' })).toHaveJSProperty('validity.valid', false);
    
});

test('verify creating supplier profile by filling all mandatory fields and leaving verification status field empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByLabel('User*').locator('option[value="237"]')).toBeAttached();
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    const business = page.getByRole('textbox', { name: 'Business name*' });
    await business.fill('cement supply');
    const verification = page.getByLabel('Verification status*');
    await verification.selectOption('');
    const subscription = page.getByLabel('Subscription tier*');
    await subscription.selectOption('silver');
    const rating = page.getByRole('spinbutton', { name: 'Rating*' });
    await rating.fill('9');
    const reviews = page.getByRole('spinbutton', { name: 'Reviews count*' });
    await reviews.fill('10');
    await expect(page.getByLabel('User*')).toHaveValue('237');
    await expect(business).toHaveValue('cement supply');
    await expect(verification).toHaveValue('');
    await expect(subscription).toHaveValue('silver');
    await expect(rating).toHaveValue('9');
    await expect(reviews).toHaveValue('10');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(verification).toHaveJSProperty('validity.valid', false);
});

test('verify creating supplier profile by filling all mandatory fields and leaving subscription tier field empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByLabel('User*').locator('option[value="237"]')).toBeAttached();
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    const business = page.getByRole('textbox', { name: 'Business name*' });
    await business.fill('cement supply');
    const verification = page.getByLabel('Verification status*');
    await verification.selectOption('pending');
    const subscription = page.getByLabel('Subscription tier*');
    await subscription.selectOption('');
    const rating = page.getByRole('spinbutton', { name: 'Rating*' });
    await rating.fill('9');
    const reviews = page.getByRole('spinbutton', { name: 'Reviews count*' });
    await reviews.fill('10');
    await expect(page.getByLabel('User*')).toHaveValue('237');
    await expect(business).toHaveValue('cement supply');
    await expect(verification).toHaveValue('pending');
    await expect(subscription).toHaveValue('');
    await expect(rating).toHaveValue('9');
    await expect(reviews).toHaveValue('10');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(subscription).toHaveJSProperty('validity.valid', false);
});

test('verify creating supplier profile by filling all mandatory fields and leaving rating field empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByLabel('User*').locator('option[value="237"]')).toBeAttached();
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    const business = page.getByRole('textbox', { name: 'Business name*' });
    await business.fill('cement supply');
    const verification = page.getByLabel('Verification status*');
    await verification.selectOption('pending');
    const subscription = page.getByLabel('Subscription tier*');
    await subscription.selectOption('silver');
    const rating = page.getByRole('spinbutton', { name: 'Rating*' });
    const reviews = page.getByRole('spinbutton', { name: 'Reviews count*' });
    await rating.fill('');
    await reviews.fill('10');
    await expect(page.getByLabel('User*')).toHaveValue('237');
    await expect(business).toHaveValue('cement supply');
    await expect(verification).toHaveValue('pending');
    await expect(subscription).toHaveValue('silver');
    await expect(rating).toHaveValue('');
    await expect(reviews).toHaveValue('10');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(rating).toHaveJSProperty('validity.valid', false);
});

test('verify creating supplier profile by filling all mandatory fields and leaving reviews count field empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByLabel('User*').locator('option[value="237"]')).toBeAttached();
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    const business = page.getByRole('textbox', { name: 'Business name*' });
    await business.fill('cement supply');
    const verification = page.getByLabel('Verification status*');
    await verification.selectOption('pending');
    const subscription = page.getByLabel('Subscription tier*');
    await subscription.selectOption('silver');
    const rating = page.getByRole('spinbutton', { name: 'Rating*' });
    const reviews = page.getByRole('spinbutton', { name: 'Reviews count*' });
    await rating.fill('9');
    await reviews.fill('');
    await expect(page.getByLabel('User*')).toHaveValue('237');
    await expect(business).toHaveValue('cement supply');
    await expect(verification).toHaveValue('pending');
    await expect(subscription).toHaveValue('silver');
    await expect(rating).toHaveValue('9');
    await expect(reviews).toHaveValue('');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(reviews).toHaveJSProperty('validity.valid', false);
});


test('verify creating supplier profile with verification status pending', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply pending');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByLabel('Verification status*')).toHaveValue('pending');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile2', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with verification status unverified', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply unverified');
    await page.getByLabel('Verification status*').selectOption('unverified');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByLabel('Verification status*')).toHaveValue('unverified');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile3', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with verification status verified', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply verified');
    await page.getByLabel('Verification status*').selectOption('verified');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByLabel('Verification status*')).toHaveValue('verified');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profil4', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with subscription tier general', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply general');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByLabel('Subscription tier*')).toHaveValue('general');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile5', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with subscription tier silver', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply silver');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('silver');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByLabel('Subscription tier*')).toHaveValue('silver');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile6', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with subscription tier gold', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply gold');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('gold');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByLabel('Subscription tier*')).toHaveValue('gold');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile7', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with subscription tier premium', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply premium');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('premium');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByLabel('Subscription tier*')).toHaveValue('premium');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile8', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with subscription tier Diamond', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply diamond');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('Diamond');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByLabel('Subscription tier*')).toHaveValue('Diamond');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile9', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with valid city', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply city');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('textbox', { name: 'City' })).toHaveValue('Kathmandu');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile10', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with numbers and symbols as city name', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply invalid city');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('123@#$');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('textbox', { name: 'City' })).toHaveValue('123@#$');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByText('Only numbers and symbols are not allowed in city name.')).toBeVisible();
});

test('delete supplier profile11', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with valid district', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply district');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('textbox', { name: 'District' })).toHaveValue('Kathmandu');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile12', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with numbers and symbols as district name', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply invalid district');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('123@#$');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('textbox', { name: 'District' })).toHaveValue('123@#$');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByText('Only numbers and symbols are not allowed in district name.')).toBeVisible();
});

test('delete supplier profile13', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with rating 3.5', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply rating 3.5');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('3.5');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('25');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('spinbutton', { name: 'Rating*' })).toHaveValue('3.5');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile14', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with rating 0', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply rating 0');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('0');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('25');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('spinbutton', { name: 'Rating*' })).toHaveValue('0');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile15', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with rating 10', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply rating 10');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('10');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('25');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('spinbutton', { name: 'Rating*' })).toHaveValue('10');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});

test('delete supplier profile16', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with negative rating', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply negative rating');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('-3');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('25');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('spinbutton', { name: 'Rating*' })).toHaveValue('-3');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByText('The rating must be at least 0.')).toBeVisible();

});

test('delete supplier profile17', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify rating field does not accept alphabets', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    const rating = page.getByRole('spinbutton', { name: 'Rating*' });
    await rating.fill('five');
    await expect(rating).not.toHaveValue('five');
});

test('verify creating supplier profile with rating greater than 10', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply rating 11');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('11');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('25');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('spinbutton', { name: 'Rating*' })).toHaveValue('11');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByText('The rating may not be greater than 10.')).toBeVisible();
});

test('delete supplier profile18', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with review count 25', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply reviews 25');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('25');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('spinbutton', { name: 'Reviews count*' })).toHaveValue('25');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});
test('delete supplier profile19', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with review count 0', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply reviews 0');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('0');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('spinbutton', { name: 'Reviews count*' })).toHaveValue('0');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
});
test('delete supplier profile20', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('verify creating supplier profile with negative review count', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('link', { name: 'New supplier profile' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('User*').selectOption('237');
    await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: 'Business name*' }).fill('cement supply negative reviews');
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('general');
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('-3');
    await page.getByRole('textbox', { name: 'Reg no' }).fill('reg12');
    await page.getByRole('textbox', { name: 'Description' }).fill('i am supplier');
    await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'District' }).fill('Kathmandu');
    await page.getByRole('textbox', { name: 'Service areas' }).fill('all over nepal');
    await expect(page.getByRole('spinbutton', { name: 'Reviews count*' })).toHaveValue('-3');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByText('The reviews count must be at least 0.')).toBeVisible();
});

test('delete supplier profile21', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('complementary').getByRole('link', { name: 'Supplier Profiles' }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ajack');
    await page.getByRole('link', { name: 'ajack sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});