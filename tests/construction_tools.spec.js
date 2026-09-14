import {test, expect} from '@playwright/test';

test('verify working of calculator button', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await expect(page).toHaveURL('https://dev6.yigserver.com:3000/tools');
})

test('verify working of concrete calculator', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Concrete Calculator Cement,' }).click();
    await page.getByRole('spinbutton', { name: 'Length' }).click();
    await page.getByRole('spinbutton', { name: 'Length' }).fill('10');
    await page.getByRole('spinbutton', { name: 'Width' }).click();
    await page.getByRole('spinbutton', { name: 'Width' }).fill('10');
    await page.getByRole('spinbutton', { name: 'Thickness' }).click();
    await page.getByRole('spinbutton', { name: 'Thickness' }).fill('0.5');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('21cu.ft · Sand')).toBeVisible();
    await expect(page.getByText('12bags · Cement')).toBeVisible();
    await expect(page.getByText('42cu.ft · Aggregate')).toBeVisible();
})