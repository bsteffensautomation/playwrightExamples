import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly userNameInputLocator: Locator;
  readonly passwordInputLocator: Locator;
  readonly submitButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInputLocator = page.locator("id=username");
    this.passwordInputLocator = page.locator("id=password");
    this.submitButtonLocator = page.locator("button:has-text('Login')");
  }

  // goto baseUrl/login
  async goto() {
    await this.page.goto("/login");
  }

  /**
   * Fill out login form, click submit, and wait for a navigation event
   */
  async login(username, password) {
    await this.goto();
    // enter username
    await this.userNameInputLocator.fill(username);

    // enter password
    await this.passwordInputLocator.fill(password);

    // pulled from documentation playwright.dev/docs/navigations#multiple-navigations
    // make sure login is successful by assuring we land on /secure route AFTER navigation
    // Note that Promise.all prevents a race condition
    // between clicking and waiting for a navigation.
    await Promise.all([
      // It is important to call waitForNavigation before click to set up waiting.
      this.page.waitForNavigation({ url: "**/secure" }),
      // Triggers a navigation with a script redirect.
      this.submitButtonLocator.click(),
    ]);
    // wait for requests to resolve
    await this.page.waitForLoadState("networkidle");
  }
}
