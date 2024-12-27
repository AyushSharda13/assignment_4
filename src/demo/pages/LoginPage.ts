import { Page } from '@playwright/test';
import { notificationLocators } from '../locators/locators';

export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://staging.gohighlevel.com/');
    await this.page.waitForSelector(notificationLocators.emailInput);
  }

  async login(email: string, password: string) {
    await this.page.fill(notificationLocators.emailInput, email);
    await this.page.fill(notificationLocators.passwordInput, password);
    await this.page.click(notificationLocators.loginButton);
  }

  async selectAccount() {
    await this.page.waitForSelector(notificationLocators.testAutomationAccount);
    await this.page.hover(notificationLocators.testAutomationAccount);
    await this.page.click(notificationLocators.testAutomationAccount);
    await this.page.waitForSelector(notificationLocators.settingsMenu);
  }
}  