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
    // create username locators
    const userNameLocator = await this.page.locator(".username");
    // create password locator
    const passwordLocator = await this.page.locator("password");
    await this.page.fill("elements.password", password);
    console.log("---- entered password ---- ");

    await Promise.all([
      this.page.waitForNavigation(), // The promise resolves after navigation has finished
      this.page.click(""), // Clicking the link will indirectly cause a navigation
      console.log("---- clicked submit ---- "),
    ]);

    await this.page.waitForLoadState("networkidle");
  }
}
