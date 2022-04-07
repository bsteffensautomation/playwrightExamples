import { Locator, Page } from "@playwright/test";

export class MultipleWindows {
  readonly page: Page;
  readonly myLocator: Locator;
  myNewPage: Page;

  constructor(page: Page) {
    this.page = page;
    this.myLocator = page.locator("text=Click Here");
  }

  // goto baseUrl/login
  async goto() {
    await this.page.goto("/windows");
  }

  /**
   * Open a new page
   */
  async openNewPage() {
    // create new context for popup
    const [newPage] = await Promise.all([
      // expect a tab to open when element is clicked
      this.page.waitForEvent("popup"),
      // click element
      this.myLocator.click(),
    ]);
    // set reference to new page on the class
    // so it can be reused in other methods
    this.myNewPage = newPage;

    // wait for new page's network requests to resolve
    await this.myNewPage.waitForLoadState("networkidle");
  }

  // find element on new page
  async newPageElement() {
    await this.myNewPage.locator("text= New Window").waitFor();
  }
}
