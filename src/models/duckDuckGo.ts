import { Locator, Page } from "@playwright/test";

export class DuckDuckGo {
  readonly page: Page;
  readonly searchInputLocator: Locator;
  readonly querySubmitLocator: Locator;
  readonly moreResultsLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInputLocator = page.locator("id=search_form_input_homepage");
    this.querySubmitLocator = page.locator('input:has-text("S")');
    this.moreResultsLocator = page.locator("text=More results");
  }

  async goto() {
    await this.page.goto("https://duckduckgo.com");
  }

  /**
   * Search for a term, validate something
   */
  async search(searchTerm: string) {
    await this.searchInputLocator.fill(searchTerm);
    await this.querySubmitLocator.click();
    await this.page.waitForLoadState("networkidle");
    await this.moreResultsLocator.waitFor();
  }
}
