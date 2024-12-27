import { Page } from '@playwright/test';
import {  notificationLocators } from '../locators/locators';

export class SettingsPage {
   page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToSettings() {
    await this.page.hover(notificationLocators.settingsMenu);
    await this.page.click(notificationLocators.settingsMenu);
    await this.page.waitForSelector(notificationLocators.billingMenu);
  }

  async goToBilling() {
    await this.page.hover(notificationLocators.billingMenu);
    await this.page.click(notificationLocators.billingMenu);
    await this.page.waitForSelector(notificationLocators.notificationsTab);
  }
}