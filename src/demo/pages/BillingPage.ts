import { Page } from '@playwright/test';
import { notificationLocators } from '../locators/locators';

export class BillingPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToNotifications() {
    await this.page.hover(notificationLocators.notificationsTab);
    await this.page.click(notificationLocators.notificationsTab);
    await this.page.waitForSelector(notificationLocators.notificationThresholdSwitch);
  }
}