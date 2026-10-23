import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import users from '../fixtures/users.json';

test('Login positivo com sucesso', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigate();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await productsPage.validateProductsPage();
});