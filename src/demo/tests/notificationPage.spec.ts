import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SettingsPage } from '../pages/SettingsPage';
import { BillingPage } from '../pages/BillingPage';
import { NotificationsPage } from '../pages/NotificationsPage';

test.describe('Notification Page Tests', () => {
  test('Verify Notification Page and Toggle Switch', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const settingsPage = new SettingsPage(page);
    const billingPage = new BillingPage(page);
    const notificationsPage = new NotificationsPage(page);

    // Step 1: Login
    await loginPage.navigate();
    await loginPage.login('viveks+test@gohighlevel.com', 'Test@123');

    // Step 2: Account Selection
    await loginPage.selectAccount();

    // Step 2: Navigate to Notifications Page
    await settingsPage.goToSettings();
    await settingsPage.goToBilling();
    await billingPage.goToNotifications();

    // Step 3: Verify Page Elements
    await notificationsPage.verifyPageElements();

    expect(await notificationsPage.verifyHeaderText()).toBe(true);
    expect(await notificationsPage.verifySectionText()).toBe(true);
    expect(await notificationsPage.verifyGlobalLimitText()).toBe(true);
    expect(await notificationsPage.verifyEmailNotificationText()).toBe(true);
    expect(await notificationsPage.verifyDefaultEmail()).toBe(true);

    // Step 4: Test Toggle Switch
    //await notificationsPage.toggleNotificationSwitch();

    /*const isSwitchChecked = await notificationsPage.isNotificationSwitchChecked();
    expect(isSwitchChecked).toBe(true);*/

    // Step 5: Save Changes
    await notificationsPage.saveChanges();

    await notificationsPage.discardChanges();
  });
});