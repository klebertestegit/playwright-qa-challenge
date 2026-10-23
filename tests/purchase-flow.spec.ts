import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import users from '../fixtures/users.json';

test('Compra de produto com sucesso', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigate();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await productsPage.addBackpackToCart();

  await productsPage.openCart();

  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Kleber');
  await page.locator('[data-test="lastName"]').fill('Dantas');
  await page.locator('[data-test="postalCode"]').fill('06000');

  await page.locator('[data-test="continue"]').click();

  await page.locator('[data-test="finish"]').click();

  await expect(
    page.locator('.complete-header')
  ).toHaveText('Thank you for your order!');
});