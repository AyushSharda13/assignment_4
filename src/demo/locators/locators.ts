export const notificationLocators = {
    // Login Page
    emailInput: 'input[name="email"]',
    passwordInput: 'input[name="password"]',
    loginButton: '//button[@class= "hl-btn justify-center w-full inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded text-white bg-curious-blue-500 hover:bg-curious-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-curious-blue-600"]',
  
    // Account Selection Popup
    
    testAutomationAccount: '(//div[@class="multiple-users--row"])[1]',

    // Sidebar Navigation
    settingsMenu: '//a[@id="sb_agency-settings"]',
    billingMenu: '//a[@id="sb_agency-billing-settings"]',
  
    // Billing Page
    notificationsTab: '//div[@data-name="notifications"]',
  
    // Notifications Page
    notificationThresholdSwitch: '//div[@class="n-switch__button"]',
    globalLimitSection: '//div[@class="p-6 hl-card"]',
    saveButton: '//button[@id= "save-btn"]',
    discardButton: '//button[@id= "discard-btn"]',
    notifiedEmailAddresses: '//div[@class="m-1 hl-text-md-medium"]',
    notificationHeader: '//div[@class="title hl-display-sm-medium"]',
    notificationSectionText: '//div[@class="mb-2 text-gray-900 hl-text-lg-medium"]',
    globalLimitText: '//div[@class="text-gray-900 hl-text-lg-medium"]',
    emailNotificationText: '//div[@class="hl-text-sm-normal"]',
    defaultEmailText: '//div[@class="text-gray-900 hl-text-md-medium"]',
    toggleBtn: "//div[@role='switch']",
    switchBtn: '//div[@class="n-switch__button"]',
    disableNotificationDialogBox: "//div[contains(@class,'n-card n-modal')]",
    disableBtn: "//span[text()='Disable']",
  };
  