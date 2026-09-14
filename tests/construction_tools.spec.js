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

test('verify working of brick calculator', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Brick Calculator Bricks' }).click();
    await page.getByText('Wall lengthftHow long is the').click();
    await page.getByRole('spinbutton', { name: 'Wall length' }).click();
    await page.getByRole('spinbutton', { name: 'Wall length' }).fill('30');
    await page.getByRole('spinbutton', { name: 'Wall height' }).click();
    await page.getByRole('spinbutton', { name: 'Wall height' }).fill('10');
    await page.getByRole('spinbutton', { name: 'Wall thickness' }).click();
    await page.getByRole('spinbutton', { name: 'Wall thickness' }).fill('0.75');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('3,190pieces · Bricks')).toBeVisible();
    await expect(page.getByText('12bags · Cement (mortar)')).toBeVisible();
    await expect(page.getByText('59.85cu.ft · Sand (mortar)')).toBeVisible();
});

test('verify working of brick calculator by filling fields with negative values', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Brick Calculator Bricks' }).click();
    await page.getByRole('spinbutton', { name: 'Wall length' }).click();
    await page.getByRole('spinbutton', { name: 'Wall length' }).fill('-30');
    await page.getByRole('spinbutton', { name: 'Wall height' }).click();
    await page.getByRole('spinbutton', { name: 'Wall height' }).fill('-10');
    await page.getByRole('spinbutton', { name: 'Wall thickness' }).click();
    await page.getByRole('spinbutton', { name: 'Wall thickness' }).fill('-0.75');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The length field must be at least 0.1.')).toBeVisible();
    await expect(page.getByText('The height field must be at least 0.1.')).toBeVisible();
    await expect(page.getByText('The thickness field must be at least 0.1.')).toBeVisible();
});
test('verify working of brick calculator by leaving all fields empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Brick Calculator Bricks' }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The length field is required.')).toBeVisible();
    await expect(page.getByText('The height field is required.')).toBeVisible();
    await expect(page.getByText('The thickness field is required.')).toBeVisible();

});

test('verify working of tile calculator', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Tile Calculator Tiles needed' }).click();
    await page.getByRole('spinbutton', { name: 'Area to cover' }).click();
    await page.getByRole('spinbutton', { name: 'Area to cover' }).fill('400');
    await page.getByRole('spinbutton', { name: 'Tile width' }).click();
    await page.getByRole('spinbutton', { name: 'Tile width' }).fill('24');
    await page.getByRole('spinbutton', { name: 'Tile height' }).click();
    await page.getByRole('spinbutton', { name: 'Tile height' }).fill('24');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('111pieces · Tiles')).toBeVisible();
});

test('verify working of tile calculator by leaving all fields empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Tile Calculator Tiles needed' }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The area sqft field is')).toBeVisible();
    await expect(page.getByText('The tile width in field is')).toBeVisible();
    await expect(page.getByText('The tile height in field is')).toBeVisible();

});

test('verify working of tile calculator by filling fields with negative values', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Tile Calculator Tiles needed' }).click();
    await page.getByRole('spinbutton', { name: 'Area to cover' }).click();
    await page.getByRole('spinbutton', { name: 'Area to cover' }).fill('-400');
    await page.getByRole('spinbutton', { name: 'Tile width' }).click();
    await page.getByRole('spinbutton', { name: 'Tile width' }).fill('-24');
    await page.getByRole('spinbutton', { name: 'Tile height' }).click();
    await page.getByRole('spinbutton', { name: 'Tile height' }).fill('-24');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The area sqft field must be at least 1.')).toBeVisible();
    await expect(page.getByText('The tile width in field must be at least 1.')).toBeVisible();
    await expect(page.getByText('The tile height in field must be at least 1.')).toBeVisible();
    
});

test('verify working of tile calculator by filling fields with 0', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Tile Calculator Tiles needed' }).click();
    await page.getByRole('spinbutton', { name: 'Area to cover' }).click();
    await page.getByRole('spinbutton', { name: 'Area to cover' }).fill('0');
    await page.getByRole('spinbutton', { name: 'Tile width' }).click();
    await page.getByRole('spinbutton', { name: 'Tile width' }).fill('0');
    await page.getByRole('spinbutton', { name: 'Tile height' }).click();
    await page.getByRole('spinbutton', { name: 'Tile height' }).fill('0');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The area sqft field must be at least 1.')).toBeVisible();
    await expect(page.getByText('The tile width in field must be at least 1.')).toBeVisible();
    await expect(page.getByText('The tile height in field must be at least 1.')).toBeVisible();
    
});

test('verify working of paint calculator', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Paint Calculator Paint needed' }).click();
    await page.getByRole('spinbutton', { name: 'Wall area' }).click();
    await page.getByRole('spinbutton', { name: 'Wall area' }).fill('1300');
    await page.getByRole('spinbutton', { name: 'Number of coats' }).click();
    await page.getByRole('spinbutton', { name: 'Number of coats' }).fill('2');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('21.7litres · Paint')).toBeVisible();
});

test('verify working of paint calculator by leaving all fields empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Paint Calculator Paint needed' }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The wall area sqft field is')).toBeVisible();
});

test('verify working of paint calculator by filling fields with negative values', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Paint Calculator Paint needed' }).click();
    await page.getByRole('spinbutton', { name: 'Wall area' }).click();
    await page.getByRole('spinbutton', { name: 'Wall area' }).fill('-1300');
    await page.getByRole('spinbutton', { name: 'Number of coats' }).click();
    await page.getByRole('spinbutton', { name: 'Number of coats' }).fill('-2');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The wall area sqft field must be at least 1.')).toBeVisible();
    await expect(page.getByText('The coats field must be at least 1.')).toBeVisible();
});

test('verify working of paint calculator by filling fields with 0', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Paint Calculator Paint needed' }).click();
    await page.getByRole('spinbutton', { name: 'Wall area' }).click();
    await page.getByRole('spinbutton', { name: 'Wall area' }).fill('0');
    await page.getByRole('spinbutton', { name: 'Number of coats' }).click();
    await page.getByRole('spinbutton', { name: 'Number of coats' }).fill('0');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The wall area sqft field must be at least 1.')).toBeVisible();
    await expect(page.getByText('The coats field must be at least 1.')).toBeVisible();
});

test('verify working of cost estimator ', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Cost Estimator Rough building' }).click();
    await page.getByRole('spinbutton', { name: 'Built-up area' }).click();
    await page.getByRole('spinbutton', { name: 'Built-up area' }).fill('1600');
    await page.getByLabel('Finish quality').selectOption('basic');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('NPR 34,00,000NPR · Estimated')).toBeVisible();
    
});

test('verify working of cost estimator by leaving all fields empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Cost Estimator Rough building' }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The area sqft field is required.')).toBeVisible();
});

test('verify working of cost estimator by filling fields with negative values', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Cost Estimator Rough building' }).click();
    await page.getByRole('spinbutton', { name: 'Built-up area' }).click();
    await page.getByRole('spinbutton', { name: 'Built-up area' }).fill('-1600');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The area sqft field must be at least 1.')).toBeVisible();
});

test('verify working of cost estimator by filling fields with 0', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Cost Estimator Rough building' }).click();
    await page.getByRole('spinbutton', { name: 'Built-up area' }).click();
    await page.getByRole('spinbutton', { name: 'Built-up area' }).fill('0');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The area sqft field must be at least 1.')).toBeVisible();
});

test('verify working of cost estimator by changing finish quality to different available options', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Cost Estimator Rough building' }).click();
    await page.getByRole('spinbutton', { name: 'Built-up area' }).click();
    await page.getByRole('spinbutton', { name: 'Built-up area' }).fill('1500');
    await page.getByLabel('Finish quality').selectOption('premium');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('NPR 48,75,000NPR · Estimated')).toBeVisible();
});

test('verify working of land area converter', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Land Area Converter Ropani ·' }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).fill('12');
    await page.getByLabel('From unit').selectOption('kattha');
    await page.getByLabel('To unit').selectOption('aana');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('12 Kattha equals127.8 AanaIn')).toBeVisible();
});

test('verify working of land area converter by leaving all fields empty', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Land Area Converter Ropani ·' }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The value field is required.')).toBeVisible();
});

test('verify working of land area converter by filling fields with negative values', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Land Area Converter Ropani ·' }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).fill('-12');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('The value field must be at least 0.')).toBeVisible();
});

test('verify working of land area converter by filling fields with 0', async ({page}) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Try the calculators' }).click();
    await page.getByRole('link', { name: 'Land Area Converter Ropani ·' }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).fill('0');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('0 Kattha equals0 AanaIn')).not.toBeVisible();
});