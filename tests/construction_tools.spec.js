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

test('verify working of concrete calculator without filling any fields', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Concrete Calculator Cement,' }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The length field is required.')).toBeVisible();
    await expect(page.getByText('The width field is required.')).toBeVisible();
    await expect(page.getByText('The thickness field is')).toBeVisible();
})

test('verify working of concrete calculator by only filling length field', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Concrete Calculator Cement,' }).click();
    await page.getByRole('spinbutton', { name: 'Length' }).click();
    await page.getByRole('spinbutton', { name: 'Length' }).fill('10');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The width field is required.')).toBeVisible();
    await expect(page.getByText('The thickness field is')).toBeVisible();
})

test('verify working of concrete calculator by only filling width field', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Concrete Calculator Cement,' }).click();
    await page.getByRole('spinbutton', { name: 'Width' }).click();
    await page.getByRole('spinbutton', { name: 'Width' }).fill('10');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The length field is required.')).toBeVisible();
    await expect(page.getByText('The thickness field is')).toBeVisible();
})

test('working of concrete calculator by only filling thickness field', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Concrete Calculator Cement,' }).click();
    await page.getByRole('spinbutton', { name: 'Thickness' }).click();
    await page.getByRole('spinbutton', { name: 'Thickness' }).fill('0.5');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The length field is required.')).toBeVisible();
    await expect(page.getByText('The width field is required.')).toBeVisible();
})

test('working of concrete calculator by filling fields with negative values', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Concrete Calculator Cement,' }).click();
    await page.getByRole('spinbutton', { name: 'Length' }).click();
    await page.getByRole('spinbutton', { name: 'Length' }).fill('-10');
    await page.getByRole('spinbutton', { name: 'Width' }).click();
    await page.getByRole('spinbutton', { name: 'Width' }).fill('-10');
    await page.getByRole('spinbutton', { name: 'Thickness' }).click();
    await page.getByRole('spinbutton', { name: 'Thickness' }).fill('-0.5');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The length field must be at least 0.1.')).toBeVisible();
    await expect(page.getByText('The width field must be at least 0.1.')).toBeVisible();
    await expect(page.getByText('The thickness field must be at least 0.1.')).toBeVisible();
})

test('working of concrete calculator by filling fields with alphabets or symbols', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Concrete Calculator Cement,' }).click();
    const length = page.getByRole('spinbutton', { name: 'Length' });
    const width = page.getByRole('spinbutton', { name: 'Width' });
    const thickness = page.getByRole('spinbutton', { name: 'Thickness' });

    // await length.fill('abc');
    // await width.fill('abc');
    // await thickness.fill('abc');

    await expect(length).toHaveValue('');
    await expect(width).toHaveValue('');
    await expect(thickness).toHaveValue('');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The length field is required.')).toBeVisible();
    await expect(page.getByText('The width field is required.')).toBeVisible();
    await expect(page.getByText('The thickness field is required.')).toBeVisible();
})

test('working of concrete calculator by filling fields with 0', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Concrete Calculator Cement,' }).click();
    await page.getByRole('spinbutton', { name: 'Length' }).click();
    await page.getByRole('spinbutton', { name: 'Length' }).fill('0');
    await page.getByRole('spinbutton', { name: 'Width' }).click();
    await page.getByRole('spinbutton', { name: 'Width' }).fill('0');
    await page.getByRole('spinbutton', { name: 'Thickness' }).click();
    await page.getByRole('spinbutton', { name: 'Thickness' }).fill('0');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The length field must be at least 0.1.')).toBeVisible();
    await expect(page.getByText('The width field must be at least 0.1.')).toBeVisible();
    await expect(page.getByText('The thickness field must be at least 0.1.')).toBeVisible();
})

test('verify working of steel estimator', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Steel Estimator TMT rod for a' }).click();
    await page.getByRole('spinbutton', { name: 'Concrete volume' }).click();
    await page.getByRole('spinbutton', { name: 'Concrete volume' }).fill('500');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('1,415.8kg · Steel (TMT)')).toBeVisible();
});

test('verify working of steel estimator by filling field with 0', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Steel Estimator TMT rod for a' }).click();
    await page.getByRole('spinbutton', { name: 'Concrete volume' }).click();
    await page.getByRole('spinbutton', { name: 'Concrete volume' }).fill('0');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The volume cuft field must be at least 0.1.')).toBeVisible();
});

test('verify working of steel estimator by leaving fields empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Steel Estimator TMT rod for a' }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The volume cuft field is required.')).toBeVisible();
});

test('verify working of steel estimator by filling fields with negative values', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Steel Estimator TMT rod for a' }).click();
    await page.getByRole('spinbutton', { name: 'Concrete volume' }).click();
    await page.getByRole('spinbutton', { name: 'Concrete volume' }).fill('-500');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The volume cuft field must be at least 0.1.')).toBeVisible();
});

test('verify working of steel estimator by filling different area used in building', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Steel Estimator TMT rod for a' }).click();
    await page.getByRole('spinbutton', { name: 'Concrete volume' }).click();
    await page.getByRole('spinbutton', { name: 'Concrete volume' }).fill('500');
    await page.getByLabel('Where is it used?').selectOption('column');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('2,831.7kg · Steel (TMT)')).toBeVisible();
});