import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async validateProductsPage() {
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}
