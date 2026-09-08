/* Important Note:: For Register Account Func, you may stumble upon the error of Email address is already taken. 
so if you get this error, please change the email address in the test case to a new one and run the test again.
*/


import {test, expect} from '@playwright/test';

test('Register account by filling all the mandatory fields', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Jack Sparrow');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('Jack23@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await page.waitForURL('**/verify-otp');
  await expect(page.getByText('Verify your email', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Skip for now' }).click();
  await page.waitForURL('**/home');
  await page.getByRole('link', { name: 'Your profile' }).click();
  await expect(page.getByText('Email', { exact: true })).toBeVisible();
});

test('Register account by only filling name field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Email address is required.')).toBeVisible(); 
  await expect(page.getByText('Password is required.')).toBeVisible();
});

test('Register account by only filling email field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('jack24@example.com');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Full name is required.')).toBeVisible(); 
  await expect(page.getByText('Password is required.')).toBeVisible();
});

test('Register account by only filling password field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Full name is required.')).toBeVisible(); 
  await expect(page.getByText('Email address is required.')).toBeVisible();
});

test('Register account by only filling phone number field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('1234567890');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Full name is required.')).toBeVisible(); 
  await expect(page.getByText('Email address is required.')).toBeVisible();
  await expect(page.getByText('Password is required.')).toBeVisible();
});

test('Register account by filling all the mandatory fields except full name field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('jack24@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Full name is required.')).toBeVisible(); 
});

test('Register account by filling all the mandatory fields except email field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Email address is required.')).toBeVisible(); 
});

test('Register account by filling all the mandatory fields except password field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('jack24@example.com');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Password is required.')).toBeVisible(); 
});

test('Verify full name field rejects special characters', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('jack@123');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Full name can only contain letters, spaces, hyphens, apostrophes, and periods.')).toBeVisible(); 
});

test('Verify full name field rejects numbers', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('jack123');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Full name can only contain letters, spaces, hyphens, apostrophes, and periods.')).toBeVisible(); 
});

test('Verify invalid email address format', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  const email = page.getByRole('textbox', { name: 'Email Address' });
  await email.fill('jack24example.com');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  expect(await email.evaluate(el => el.validity.typeMismatch)).toBe(true);
});

test('verify email address without domain', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  const email = page.getByRole('textbox', { name: 'Email Address' });
  await email.fill('jack24@');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  expect(await email.evaluate(el => el.validity.typeMismatch)).toBe(true);
});

test('verify email address with spaces is invalid', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  const email = page.getByRole('textbox', { name: 'Email Address' });
  await email.fill('jack 2 4@example.com');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  expect(await email.evaluate(el => el.validity.typeMismatch)).toBe(true);
});

test('verify register account with already registered email address', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('jack23@example.com'); 
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');   
  await page.getByRole('button', { name: 'Create Account →' }).click(); 
  await expect(page.getByText('The email has already been taken.')).toBeVisible();
});

test('verify account registration with phone number field left empty', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('jack25@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await page.waitForURL('**/verify-otp');
  await expect(page.getByText('Verify your email', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Skip for now' }).click();
  await page.waitForURL('**/home');
  await page.getByRole('link', { name: 'Your profile' }).click();
  await expect(page.getByText('Email', { exact: true })).toBeVisible();
});

test('validate country code in phone number field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('+1 1234567890');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('jack27@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await page.waitForURL('**/verify-otp');
  await expect(page.getByText('Verify your email', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Skip for now' }).click();
  await page.waitForURL('**/home');
  await page.getByRole('link', { name: 'Your profile' }).click();
  await expect(page.getByText('Email', { exact: true })).toBeVisible();
});

test('validate alphabetic characters in phone number field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('abcdefghij');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('Please enter a valid phone number.')).toBeVisible(); 
});

test('validate duplicate phone number in phone number field', async ({ page }) => {
  await page.goto('https://dev6.yigserver.com:3000/');
  await page.getByRole('link', { name: 'Create account' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('+1 1234567890');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('jack28@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await expect(page.getByText('The phone has already been taken.')).toBeVisible(); 
});

test('validate duplicate phone number without country code in phone number field', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Create account' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).fill('9822831250');
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('jack30@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await expect(page.getByText('The phone has already been taken.')).toBeVisible(); 
  });

test('validate password field with less than 8 characters', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Create account' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).fill('546465143654');
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('jack31@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await expect(page.getByText('Password must be at least 8 characters and include upper & lower case letters and a number.')).toBeVisible(); 
  });

test('validate password field rejects password that does not meet the criteria', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Create account' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).fill('546465143654');
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('jack31@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('testuser12');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await expect(page.getByText('Password must be at least 8 characters and include upper & lower case letters and a number.')).toBeVisible(); 
  });

test('Validate password field masks the input characters', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Create account' }).click();
    const passwordField = page.getByRole('textbox', { name: 'Password' });
    await passwordField.click();
    await passwordField.fill('Testuser@12');
    const inputType = await passwordField.evaluate(el => el.type);
    expect(inputType).toBe('password');
  });

test('validate password field rejects emojis', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Create account' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).fill('546465143654');
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('jack31@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12😊');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await expect(page.getByText('Password must be at least 8 characters and include upper & lower case letters and a number.')).toBeVisible(); 
  });

  test('register account by civil engineer role and verify the role is displayed in profile', async ({ page }) => {
    await page.goto('https://dev6.yigserver.com:3000/');
    await page.getByRole('link', { name: 'Create account' }).click();
    await page.getByRole('button', { name: 'Civil Engineer Design &' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).click();
    await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('jack34@example.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
    await page.getByRole('button', { name: 'Create Account →' }).click();
    await page.waitForURL('**/verify-otp');
    await expect(page.getByText('Verify your email', { exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Skip for now' }).click();
    await page.waitForURL('**/home');
    await page.getByRole('link', { name: 'Your profile' }).click();
    await expect(page.getByRole('main').getByText('Civil Engineer')).toBeVisible();
    await expect(page.getByText('Email', { exact: true })).toBeVisible();
  });

    test('register account by contractor role and verify the role is displayed in profile', async ({ page }) => {
        await page.goto('https://dev6.yigserver.com:3000/');
        await page.getByRole('link', { name: 'Create account' }).click();
        await page.getByRole('button', { name: 'Contractor' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('jack35@example.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
        await page.getByRole('button', { name: 'Create Account →' }).click();
        await page.waitForURL('**/verify-otp');
        await expect(page.getByText('Verify your email', { exact: true })).toBeVisible();
        await page.getByRole('button', { name: 'Skip for now' }).click();
        await page.waitForURL('**/home');
        await page.getByRole('link', { name: 'Your profile' }).click();
        await expect(page.getByRole('main').getByText('Contractor')).toBeVisible();
        await expect(page.getByText('Email', { exact: true })).toBeVisible();
      });

    test('register account by matrial supplier role and verify the role is displayed in profile', async ({ page }) => {
        await page.goto('https://dev6.yigserver.com:3000/');
        await page.getByRole('link', { name: 'Create account' }).click();
        await page.getByRole('button', { name: 'Material Supplier' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('jack36@example.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
        await page.getByRole('button', { name: 'Create Account →' }).click();
        await page.waitForURL('**/verify-otp');
        await expect(page.getByText('Verify your email', { exact: true })).toBeVisible();
        await page.getByRole('button', { name: 'Skip for now' }).click();
        await page.waitForURL('**/home');
        await page.getByRole('link', { name: 'Your profile' }).click();
        await expect(page.getByRole('main').getByText('Material Supplier')).toBeVisible();
        await expect(page.getByText('Email', { exact: true })).toBeVisible();
      });
    
      test('register account by same email but for another role', async ({ page }) => {
        await page.goto('https://dev6.yigserver.com:3000/');
        await page.getByRole('link', { name: 'Create account' }).click();
        await page.getByRole('button', { name: 'Contractor' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('jack36@example.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
        await page.getByRole('button', { name: 'Create Account →' }).click();
        await expect(page.getByText('The email has already been taken.')).toBeVisible();    
      });

    test('verify incorrect opt code while registering account', async ({ page }) => {
      await page.goto('https://dev6.yigserver.com:3000/');
      await page.getByRole('link', { name: 'Create account' }).click();
      await page.getByRole('textbox', { name: 'Full Name' }).click();
      await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
      await page.getByRole('textbox', { name: 'Email Address' }).click();
      await page.getByRole('textbox', { name: 'Email Address' }).fill('jack41@example.com');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
      await page.getByRole('button', { name: 'Create Account →' }).click();
      await page.waitForURL('**/verify-otp');
      await expect(page.getByText('Verify your email', { exact: true })).toBeVisible();
      await page.getByRole('textbox').first().click();
      await page.getByRole('textbox').first().fill('1');
      await page.getByRole('textbox').nth(1).fill('3');
      await page.getByRole('textbox').nth(2).fill('2');
      await page.getByRole('textbox').nth(3).fill('4');
      await page.getByRole('textbox').nth(4).fill('5');
      await page.getByRole('textbox').nth(5).fill('6');
      await page.getByRole('button', { name: 'Verify' }).click();
      await expect(page.getByText('The given code is not correct')).toBeVisible();
    });

    test('verify if email is case sensitive', async ({ page }) => { 
      await page.goto('https://dev6.yigserver.com:3000/');
      await page.getByRole('link', { name: 'Create account' }).click();
      await page.getByRole('textbox', { name: 'Full Name' }).click();
      await page.getByRole('textbox', { name: 'Full Name' }).fill('jack sparrow');
      await page.getByRole('textbox', { name: 'Email Address' }).click();
      await page.getByRole('textbox', { name: 'Email Address' }).fill('JACK20@example.com');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('Testuser@12');
      await page.getByRole('button', { name: 'Create Account →' }).click();
      await expect(page.getByText('The email has already been taken.')).toBeVisible();
    });
      
