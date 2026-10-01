import {test, expect} from '@playwright/test';

// test('verify working of professional profile button', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/professional-profiles');
//     await expect(page.getByRole('heading', { name: 'Professional Profiles' })).toBeVisible();
// });

// test('create professional profile with all fields', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     const email = 'jack.sparrow' + Date.now() + '@example.com';
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Users' }).click();
//     await page.getByRole('link', { name: 'New user' }).click();
//     const nameField = page.getByRole('textbox', { name: 'Name*' });
//     const emailField = page.getByRole('textbox', { name: 'Email address*' });
//     const passwordField = page.getByRole('textbox', { name: 'Password*' });
//     await nameField.fill('jack sparrow');
//     await expect(nameField).toHaveValue('jack sparrow');
//     await emailField.fill(email);
//     await expect(emailField).toHaveValue(email);
//     await passwordField.fill('Testuser@12');
//     await expect(passwordField).toHaveValue('Testuser@12');
//     await page.getByRole('button', { name: 'Select an option' }).click();
//     await page.getByRole('option', { name: 'engineer', exact: true }).click();
//     await page.getByLabel('Default role').selectOption('engineer');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('status')).toContainText('Created');
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill(email);
//     await page.getByRole('option', {name: `jack sparrow (${email.replace('.com', '')}`}).click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('5');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });

// test('create professional profile without selecting any user and filling all fields', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('5');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('The user field is required.')).toBeVisible();
    
// });

// test('create profile without selecting kind and filling all mandatory fields', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('5');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     const kind = page.getByLabel('Kind*');

//     await expect(kind).toHaveJSProperty('validity.valid', false);
// });

// test('delete professional profile0', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('enter experience in negative number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101');
//     await page.getByRole('option', { name: 'jacks sparrow (jack101@' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('-5');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('Experience years must be a positive number.')).toBeVisible();
// });

// test('delete professional profile1', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('enter 0 as experience', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101');
//     await page.getByRole('option', { name: 'jacks sparrow (jack101@' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('0');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/professional-profiles?search=jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await expect(page.getByText('Delete Professional Profile')).toBeVisible();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('Enter positive number as experience', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', { name: 'jacks sparrow (jack101@' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/professional-profiles?search=jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await expect(page.getByText('Delete Professional Profile')).toBeVisible();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });


// test('leave license number empty', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/professional-profiles?search=jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await expect(page.getByText('Delete Professional Profile')).toBeVisible();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('set license status to active without filling license number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('License number is required when license status is active')).toBeVisible();
// });

// test('delete professional profile2', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('set license status to expired without filling license number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('expired');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('License number is required when license status is expired')).toBeVisible();
// });

// test('delete professional profile3', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('set license status to suspended without filling license number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('suspended');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('License number is required when license status is suspended')).toBeVisible();
// });

// test('delete professional profile4', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });


// test('Enter valid success rate', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('50');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/professional-profiles?search=jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await expect(page.getByText('Delete Professional Profile')).toBeVisible();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('Enter 0 as success rate', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('0');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/professional-profiles?search=jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await expect(page.getByText('Delete Professional Profile')).toBeVisible();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('Enter negative number as success rate', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('-1');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('Success rate must be a positive number.')).toBeVisible();
// });

// test('delete professional profile5', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('Enter number greater than 100 as success rate', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('101');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     // await expect(page.getByText('Success rate must be 100 or less')).toBeVisible();
// });

// test('delete professional profile19', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('Enter total projects as positive number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/professional-profiles?search=jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await expect(page.getByText('Delete Professional Profile')).toBeVisible();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('Enter total projects as negative number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('-10');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('Total projects must be a positive number.')).toBeVisible();
// });

// test('delete professional profile6', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('verify total projects as decimal number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10.5');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('Total projects must be a positive whole number')).toBeVisible();
// });

// test('delete professional profile7', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('verify valid city name in city field', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByRole('textbox', { name: 'City' }).click();
//     await page.getByRole('textbox', { name: 'City' }).fill('kathmandu');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/professional-profiles?search=jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await expect(page.getByText('Delete Professional Profile')).toBeVisible();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('verify numbers and symbols only as city name in city field', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByRole('textbox', { name: 'City' }).click();
//     await page.getByRole('textbox', { name: 'City' }).fill('123@#$');
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('City must be a string.')).toBeVisible();
// });

// test('delete professional profile9', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('Enter valid district as district name', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByRole('textbox', { name: 'City' }).click();
//     await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });

// test('delete professional profile8', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('Leave verification status empty', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByRole('textbox', { name: 'City' }).click();
//     await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
//     await expect(page.getByLabel('Verification status*')).toHaveJSProperty('validity.valueMissing',true)
// });

// test('select verification status as verified', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByRole('textbox', { name: 'City' }).click();
//     await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('verified');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });

// test('select verification statis as unverified', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByRole('textbox', { name: 'City' }).click();
//     await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('unverified');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });

// test('select verification status as pending', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     await page.getByRole('textbox', { name: 'City' }).click();
//     await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/professional-profiles?search=jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.getByRole('button', { name: 'Delete' }).click();
//     await expect(page.getByText('Delete Professional Profile')).toBeVisible();
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('select subscription tier as general', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('general');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });

// test('delete professional profile20', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.waitForTimeout(1500);
//     await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('select subscription tier as silver', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('silver');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });


// test('delete professional profile21', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.waitForTimeout(1500);
//     await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('select subscription tier as gold', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('gold');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });


// test('delete professional profile22', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.waitForTimeout(1500);
//     await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('select subscription tier as premium', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('premium');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });


// test('delete professional profile23', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.waitForTimeout(1500);
//     await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('select subscription tier as Diamond', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('Diamond');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('9');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });


// test('delete professional profile24', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.waitForTimeout(1500);
//     await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('create professional profile by leaving rating field empty', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('Diamond');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByLabel('Rating*')).toHaveJSProperty('validity.valueMissing',true)
// });

// test('create professional profile by leaving review count field empty', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('Diamond');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('10');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByLabel('Reviews count*')).toHaveJSProperty('validity.valueMissing',true)
// });

// test('create professional profile by filling negative number as rating', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('Diamond');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('-10');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('Rating must be between 0 and 10.')).toBeVisible();
// });


// test('create professional profile by filling positive number as rating', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('Diamond');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('10');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });

// test('delete professional profile25', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.waitForTimeout(1500);
//     await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });


// test('create professional profile by filling review count as 0', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('Diamond');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('10');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('0');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });

// test('delete professional profile25', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.waitForTimeout(1500);
//     await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('create professional profile by filling review count as positive number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('Diamond');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('10');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByRole('heading', { name: 'Created' })).toBeVisible();
// });

// test('delete professional profile26', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('jacks', { delay: 150 });
//     await expect(search).toHaveValue('jacks');
//     await page.getByRole('link', { name: 'jacks sparrow' }).click();
//     await page.waitForTimeout(1500);
//     await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
//     await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
// });

// test('create professional profile by filling review count as negative number', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     await page.getByRole('link', { name: 'New professional profile' }).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
//     await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
//     await page.getByRole('button', { name: 'Select an option' }).first().click();
//     await page.getByLabel('Kind*').selectOption('engineer');
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
//     await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
//     await page.getByLabel('License status').selectOption('active');
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
//     await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
//     await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
//     // await page.getByRole('textbox', { name: 'City' }).click();
//     // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
//     // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
//     // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
//     // await page.getByRole('option', { name: 'Kathmandu' }).click();
//     await page.getByLabel('Verification status*').selectOption('pending');
//     await page.getByLabel('Subscription tier*').selectOption('Diamond');
//     await page.getByRole('spinbutton', { name: 'Rating*' }).click();
//     await page.getByRole('spinbutton', { name: 'Rating*' }).fill('10');
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
//     await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('-10');
//     await page.getByRole('button', { name: 'Create', exact: true }).click();
//     await expect(page.getByText('Reviews count must be greater than or equal to 0.')).toBeVisible();
// });


// test('search professional profile by engineer', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('engineer', { delay: 150 });
//     await expect(search).toHaveValue('engineer');
//     await expect(page.getByRole('link', { name: 'engineer' }).first()).toBeVisible({ timeout: 10000 });
// });

// test('search professional profile by contractor', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('contractor', { delay: 150 });
//     await expect(search).toHaveValue('contractor');
//     await expect(page.getByRole('link', { name: 'contractor' }).first()).toBeVisible({ timeout: 10000 });
// });

// test('search professional profile by full name', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('Mr contractor', { delay: 150 });
//     await expect(search).toHaveValue('Mr contractor');
//     await expect(page.getByRole('link', { name: 'Mr contractor' })).toBeVisible({ timeout: 10000 });
// });

// test('search professional profile by partial name', async ({page}) => {
//     await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
//     await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
//     await page.getByRole('textbox', { name: 'Password*' }).fill('password');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await page.getByRole('link', { name: 'Professional Profiles' }).click();
//     const searches = page.getByRole('searchbox');
//     console.log('searchbox count:', await searches.count());
//     for (let i = 0; i < await searches.count(); i++) {
//     console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
//     }
//     await page.waitForLoadState('networkidle');
//     const search = page.locator('.fi-ta-search-field input');
//     await search.waitFor({ state: 'visible' });
//     await search.click();
//     await search.pressSequentially('Mr con', { delay: 150 });
//     await expect(search).toHaveValue('Mr con');
//     await expect(page.getByRole('link', { name: 'Mr contractor' })).toBeVisible({ timeout: 10000 });
// });

test('search professional profile by non existing name', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Professional Profiles' }).click();
    const searches = page.getByRole('searchbox');
    console.log('searchbox count:', await searches.count());
    for (let i = 0; i < await searches.count(); i++) {
    console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
    }
    await page.waitForLoadState('networkidle');
    const search = page.locator('.fi-ta-search-field input');
    await search.waitFor({ state: 'visible' });
    await search.click();
    await search.pressSequentially('non existing name', { delay: 150 });
    await expect(search).toHaveValue('non existing name');
    await expect(page.getByRole('link', { name: 'non existing name' })).not.toBeVisible({ timeout: 10000 });
});

test('search professional profile by full license number', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Professional Profiles' }).click();
    const searches = page.getByRole('searchbox');
    console.log('searchbox count:', await searches.count());
    for (let i = 0; i < await searches.count(); i++) {
    console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
    }
    await page.waitForLoadState('networkidle');
    const search = page.locator('.fi-ta-search-field input');
    await search.waitFor({ state: 'visible' });
    await search.click();
    await search.pressSequentially('NEC-09812', { delay: 150 });
    await expect(search).toHaveValue('NEC-09812');
    await expect(page.getByRole('link', { name: 'Sita Kumari Thapa' })).toBeVisible({ timeout: 10000 });
});

test('search professional profile by city name', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Professional Profiles' }).click();
    const searches = page.getByRole('searchbox');
    console.log('searchbox count:', await searches.count());
    for (let i = 0; i < await searches.count(); i++) {
    console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
    }
    await page.waitForLoadState('networkidle');
    const search = page.locator('.fi-ta-search-field input');
    await search.waitFor({ state: 'visible' });
    await search.click();
    await search.pressSequentially('Kathmandu', { delay: 150 });
    await expect(search).toHaveValue('Kathmandu');
    await expect(page.getByRole('link', { name: 'Kathmandu' }).nth(1)).toBeVisible();
});

test('search professional profile by license number in different case', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Professional Profiles' }).click();
    const searches = page.getByRole('searchbox');
    console.log('searchbox count:', await searches.count());
    for (let i = 0; i < await searches.count(); i++) {
    console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
    }
    await page.waitForLoadState('networkidle');
    const search = page.locator('.fi-ta-search-field input');
    await search.waitFor({ state: 'visible' });
    await search.click();
    await search.pressSequentially('nec-09812', { delay: 150 });
    await expect(search).toHaveValue('nec-09812');
    await expect(page.getByRole('link', { name: 'Sita Kumari Thapa' })).toBeVisible({ timeout: 10000 });
});

test('search with numbers and special characters', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Professional Profiles' }).click();
    const searches = page.getByRole('searchbox');
    console.log('searchbox count:', await searches.count());
    for (let i = 0; i < await searches.count(); i++) {
    console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
    }
    await page.waitForLoadState('networkidle');
    const search = page.locator('.fi-ta-search-field input');
    await search.waitFor({ state: 'visible' });
    await search.click();
    await search.pressSequentially('123123@W#!@!@!#!', { delay: 150 });
    await expect(search).toHaveValue('123123@W#!@!@!#!');
    await expect(page.getByRole('link', { name: '123123@W#!@!@!#!' })).toNotBeVisible({ timeout: 10000 });
});

test('delete professional profile27', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Professional Profiles' }).click();
    const searches = page.getByRole('searchbox');
    console.log('searchbox count:', await searches.count());
    for (let i = 0; i < await searches.count(); i++) {
    console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
    }
    await page.waitForLoadState('networkidle');
    const search = page.locator('.fi-ta-search-field input');
    await search.waitFor({ state: 'visible' });
    await search.click();
    await search.pressSequentially('jacks', { delay: 150 });
    await expect(search).toHaveValue('jacks');
    await page.getByRole('link', { name: 'jacks sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});

test('create professional profile by using duplicate license number', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Professional Profiles' }).click();
    await page.getByRole('link', { name: 'New professional profile' }).click();
    await page.getByRole('button', { name: 'Select an option' }).first().click();
    await page.getByRole('textbox', { name: 'Search' }).fill('jack101@example.com');
    await page.getByRole('option', {name: `jacks sparrow (jack101@`}).click();
    await page.getByRole('button', { name: 'Select an option' }).first().click();
    await page.getByLabel('Kind*').selectOption('engineer');
    await page.getByRole('spinbutton', { name: 'Experience years*' }).click();
    await page.getByRole('spinbutton', { name: 'Experience years*' }).fill('1');
    await page.getByLabel('License status').selectOption('active');
    await page.getByRole('spinbutton', { name: 'Success rate*' }).click();
    await page.getByRole('spinbutton', { name: 'Success rate*' }).fill('100');
    await page.getByRole('spinbutton', { name: 'Total projects*' }).click();
    await page.getByRole('spinbutton', { name: 'Total projects*' }).fill('10');
    await page.getByRole('textbox', { name: 'License no' }).click();
    await page.getByRole('textbox', { name: 'License no' }).fill('NEC-09812');
    // await page.getByRole('textbox', { name: 'City' }).click();
    // await page.getByRole('textbox', { name: 'City' }).fill('Kathmandu');
    // await page.getByRole('button', { name: 'Select an option' }).nth(1).click();
    // await page.getByRole('textbox', { name: 'Search' }).fill('kathmandu');
    // await page.getByRole('option', { name: 'Kathmandu' }).click();
    await page.getByLabel('Verification status*').selectOption('pending');
    await page.getByLabel('Subscription tier*').selectOption('Diamond');
    await page.getByRole('spinbutton', { name: 'Rating*' }).click();
    await page.getByRole('spinbutton', { name: 'Rating*' }).fill('10');
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).click();
    await page.getByRole('spinbutton', { name: 'Reviews count*' }).fill('-10');
    await page.getByRole('button', { name: 'Create', exact: true }).click();
    await expect(page.getByText('The license no has already been taken.')).toBeVisible();
});

test('delete professional profile28', async ({page}) => {
    await page.goto('https://dev6.yigserver.com/php84/apps/nirman-ai-backend/public/admin/login');
    await page.getByRole('textbox', { name: 'Email address*' }).fill('admin@nirman.ai');
    await page.getByRole('textbox', { name: 'Password*' }).fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Professional Profiles' }).click();
    const searches = page.getByRole('searchbox');
    console.log('searchbox count:', await searches.count());
    for (let i = 0; i < await searches.count(); i++) {
    console.log(i, await searches.nth(i).getAttribute('placeholder'), await searches.nth(i).isVisible());
    }
    await page.waitForLoadState('networkidle');
    const search = page.locator('.fi-ta-search-field input');
    await search.waitFor({ state: 'visible' });
    await search.click();
    await search.pressSequentially('jacks', { delay: 150 });
    await expect(search).toHaveValue('jacks');
    await page.getByRole('link', { name: 'jacks sparrow' }).click();
    await page.waitForTimeout(1500);
    await page.locator('button[wire\\:click*="mountAction(\'delete\'"]').click();
   
    await page.locator('[role="dialog"].fi-modal-open').getByRole('button', { name: 'Delete' }).click();
});