import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../fixtures/users.json';

test('Login negativo com usuario bloqueado', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    users.lockedUser.username,
    users.lockedUser.password
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText('Epic sadface');
});