import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
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

    // create username locator
    const userNameLocator = await this.page.locator("id=username");

    // create password locator
    const passwordLocator = await this.page.locator("id=password");

    // create submit button locator
    const submitLocator = await this.page.locator("button:has-text('Login')");

    // enter username
    await userNameLocator.fill(username);

    // enter password
    await passwordLocator.fill(password);

    // pulled from documentation
    //playwright.dev/docs/navigations#multiple-navigations

    // Note that Promise.all prevents a race condition
    // between clicking and waiting for a navigation.
    https: await Promise.all([
      // It is important to call waitForNavigation before click to set up waiting.
      this.page.waitForNavigation({ url: "**/secure" }),
      // Triggers a navigation with a script redirect.
      submitLocator.click(),
    ]);
    // wait for requests to resolve
    await this.page.waitForLoadState("networkidle");
  }
}
