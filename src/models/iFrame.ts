import { FrameLocator, Page } from "@playwright/test";

export class iFrame {
  readonly page: Page;
  iFrameLocator: FrameLocator;

  constructor(page: Page) {
    this.page = page;
  }

  // goto baseUrl/iframe
  async goto() {
    await this.page.goto("/iframe");
  }

  /**
   * Create a context for iFrame and set on the object
   * @param element element that represents an iframe
   * @returns iFrameLocator for use in further method
   */
  async createFrame(element = "#example") {
    this.iFrameLocator = await this.page.frameLocator(element);
    return this.iFrameLocator;
  }

  async useIFrame() {
    await this.createFrame();
    const file = await this.iFrameLocator.locator("text=File");
    await file.click();
  }
}
