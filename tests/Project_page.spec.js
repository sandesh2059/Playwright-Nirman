import {test, expect} from '@playwright/test';

test('Verify working of project button', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'My Projects' })).toBeVisible();
});

test('Create or post a project', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await page.getByRole('link', { name: 'Post' }).click();
    await page.getByRole('textbox', { name: 'Modern Residential Villa' }).click();
    await page.getByRole('textbox', { name: 'Modern Residential Villa' }).fill('B villa');
    await page.getByRole('combobox').first().selectOption('8');
    await page.getByRole('combobox').nth(1).selectOption('1');
    await page.getByRole('combobox').nth(2).selectOption('Kathmandu');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('spinbutton', { name: '2500' }).click();
    await page.getByRole('spinbutton', { name: '2500' }).fill('2500');
    await page.getByRole('spinbutton', { name: '2.5' }).click();
    await page.getByRole('spinbutton', { name: '2.5' }).fill('2.5');
    await page.getByRole('button', { name: 'rocky' }).click();
    await page.getByRole('button', { name: 'Structural Analysis' }).click();
    await page.getByRole('button', { name: 'Mep Engineering' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('spinbutton', { name: '5000000', exact: true }).click();
    await page.getByRole('spinbutton', { name: '5000000', exact: true }).fill('10000000');
    await page.getByRole('spinbutton', { name: '15000000' }).click();
    await page.getByRole('spinbutton', { name: '15000000' }).fill('20000000');
    await page.getByRole('textbox').fill('2026-09-12');
    await page.getByRole('spinbutton', { name: '6' }).click();
    await page.getByRole('spinbutton', { name: '6' }).fill('12');
    await page.getByRole('combobox').selectOption('investor');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Post Project' }).click();
    await expect(page.getByRole('heading', { name: 'B villa' })).toBeVisible();
});

test('remove/delete a project', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await page.getByRole('link', { name: 'B villa' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await expect(page.getByRole('heading', { name: 'B Villa' })).not.toBeVisible();
});

test('edit a project', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await page.getByRole('link', { name: 'B villa' }).click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.getByRole('textbox', { name: 'Modern Residential Villa' }).click();
    await page.getByRole('textbox', { name: 'Modern Residential Villa' }).fill('C villa');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'C villa' })).toBeVisible();
});


/* test('verify if Proposal is received', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'I already have an account' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack43@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('link', { name: 'Civil Engineering active B' }).first().click();
  await page.getByRole('button', { name: 'Submit Quotation' }).click();
  await page.getByRole('spinbutton', { name: '1200000' }).click();
  await page.getByRole('spinbutton', { name: '1200000' }).fill('15000000');
  await page.getByRole('textbox', { name: 'Weeks' }).click();
  await page.getByRole('textbox', { name: 'Weeks' }).fill('4');
  await page.getByRole('textbox', { name: 'Describe your approach,' }).click();
  await page.getByRole('textbox', { name: 'Describe your approach,' }).fill('i want to do this project');
  await page.getByRole('button', { name: 'Send Quotation' }).click();
  await page.getByRole('link', { name: 'Your profile' }).click();
  await page.getByRole('button', { name: 'Sign out' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Sign In →' }).click();
  await page.getByRole('link', { name: 'Projects', exact: true }).click();
  await page.getByRole('link', { name: 'Civil Engineering active B villa Kathmandu NPR 1Cr – NPR 2Cr 1 proposals 1h ago', first: true }).click();
  await expect(page.getByText('Jack sparrowCivil Engineer 5.0submittedNPR 15,000,0004 ChatShortlist Reject')).toBeVisible();
}); */

test('Verify proposal is received or not', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await page.getByRole('link', { name: 'active sano ghar NPR 6,554 –' }).click();
    await expect(page.getByText('Elon Musk')).toBeVisible();
});
test('shortlist the proposal', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await page.getByRole('link', { name: 'active sano ghar NPR 6,554 –' }).click();
    await page.getByRole('button', { name: 'Shortlist' }).first().click();
    await expect(page.getByText('Elon MuskStructural Engineer 0.0shortlisted')).toBeVisible();

    
});

test('reject the proposal', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await page.getByRole('link', { name: 'active sano ghar NPR 6,554 –' }).click();
    await page.getByRole('button', { name: 'Reject' }).first().click();
    await expect(page.getByText('Elon MuskStructural Engineer 0.0rejected')).toBeVisible();
});

test('accept the proposal', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'I already have an account' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('jack16@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Sign In →' }).click();
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await page.getByRole('link', { name: 'active sano ghar NPR 6,554 –' }).click();
    await page.getByRole('button', { name: 'Accept' }).first().click();
    await expect(page.getByText('Elon MuskStructural Engineer 0.0accepted')).toBeVisible();
});