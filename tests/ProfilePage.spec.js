import{test, expect} from '@playwright/test';

test('Verify working of profile button', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await expect(page).toHaveURL('https://dev6.yigserver.com:3000/profile');
});

test('Verify correct name is being displayed', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await expect(page.getByRole('heading', { name: 'Jack Sparrow' })).toBeVisible();
});

test('verify correct email is being displayed', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await expect(page.getByText('jack16@example.com')).toBeVisible();
});

test('Verify correct role is being displayed', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await expect(page.getByRole('main').getByText('Property Owner')).toBeVisible();
});

test('Verify the verified mark appears after verification is completed', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('qa.testuser2083@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await expect(page.locator('div').filter({ hasText: 'Emailqa.testuser2083@gmail.com' }).nth(5)).toBeVisible();
});

test('Complete the engineer profile', async ({page}) => {
    const email = `jack${Date.now()}@example.com`;
    await page.goto('https://dev6.yigserver.com:3000/register')
    await page.getByRole('button', { name: 'Civil Engineer Design &' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Jack Sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await page.getByRole('button', { name: 'Skip for now' }).click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await page.getByRole('link', { name: 'Complete your professional' }).click();
    await page.getByRole('textbox', { name: 'Structural Engineer, 8+ yrs' }).click();
    await page.getByRole('textbox', { name: 'Structural Engineer, 8+ yrs' }).fill('i am an engineer');
    await page.getByRole('textbox', { name: 'Tell clients about your' }).click();
    await page.getByRole('textbox', { name: 'Tell clients about your' }).fill('i do engineering works');
    await page.getByRole('spinbutton', { name: '8' }).click();
    await page.getByRole('spinbutton', { name: '8' }).fill('3');
    await page.getByRole('combobox').selectOption('Kathmandu');
    await page.getByRole('textbox', { name: 'Kathmandu' }).click();
    await page.getByRole('textbox', { name: 'Kathmandu' }).fill('kathmandu');
    await page.getByRole('button', { name: 'Save profile' }).click();
    await expect(page.getByRole('link', { name: 'Edit professional profile' })).toBeVisible();

});