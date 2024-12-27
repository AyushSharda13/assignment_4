import { Page, expect } from '@playwright/test';
import { notificationLocators } from '../locators/locators';

export class NotificationsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyPageElements() {
    await this.page.waitForSelector(notificationLocators.notificationThresholdSwitch);
    await expect(this.page.locator(notificationLocators.notificationThresholdSwitch)).toBeVisible();
    await expect(this.page.locator(notificationLocators.globalLimitSection)).toBeVisible();
    await expect(this.page.locator(notificationLocators.notifiedEmailAddresses)).toBeVisible();
  }

  /*async toggleNotificationSwitch() {
    await this.page.hover(Locators.notificationThresholdSwitch);
    const isChecked = await this.page.isChecked(Locators.notificationThresholdSwitch);
    await this.page.click(Locators.notificationThresholdSwitch);
    expect(await this.page.isChecked(Locators.notificationThresholdSwitch)).toBe(isChecked);
  }
    */

  /*const isSwitchChecked = await billingPage.isNotificationSwitchChecked();
    expect(isSwitchChecked).toBe(true);
    */

  /*async isNotificationSwitchChecked(): Promise<boolean> {
    await this.page.waitForSelector(Locators.notificationThresholdSwitch);
      return await this.page.isChecked(Locators.notificationThresholdSwitch);
  }*/

      async isNotificationSwitchChecked(): Promise<boolean> {
        await this.page.waitForSelector(notificationLocators.toggleBtn);
        const ariaChecked = await this.page.getAttribute(notificationLocators.toggleBtn, 'aria-checked');
        return ariaChecked === 'true';
      }
    
      async toggleNotificationSwitch() {
        await this.page.click(notificationLocators.toggleBtn);
      }
    
      async disableNotification() {
        await expect(this.page.locator(notificationLocators.disableNotificationDialogBox)).toBeVisible();
        await this.page.click(notificationLocators.disableBtn);
      }

  async verifyHeaderText(): Promise<boolean> {
    return await this.page.isVisible(notificationLocators.notificationHeader);
  }

  async verifySectionText(): Promise<boolean> {
    return await this.page.isVisible(notificationLocators.notificationSectionText);
  }

  async verifyGlobalLimitText(): Promise<boolean> {
    return await this.page.isVisible(notificationLocators.globalLimitText);
  }

  async verifyEmailNotificationText(): Promise<boolean> {
    return await this.page.isVisible(notificationLocators.emailNotificationText);
  }

  async verifyDefaultEmail(): Promise<boolean> {
    return await this.page.isVisible(notificationLocators.defaultEmailText);
  }

  async saveChanges() {
    await this.page.hover(notificationLocators.saveButton);
    await this.page.click(notificationLocators.saveButton);
  }

  async discardChanges() {
    await this.page.hover(notificationLocators.discardButton);
    await this.page.click(notificationLocators.discardButton);
  }
}