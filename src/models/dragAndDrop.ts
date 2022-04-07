import { Page } from "@playwright/test";

export class DragAndDropPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // goto baseUrl/drag_and_drop
  async goto() {
    await this.page.goto("/drag_and_drop");
  }

  /**
   * Drag an Element to a desintation
   * In a real world example the source and destinatino would be parameters
   * of this function
   */
  async dragAndDrop() {
    // create username locator
    const sourceElementLocator = await this.page.locator("id=column-a");

    // create password locator
    const destinationLocator = await this.page.locator("id=column-b");

    // perform drag operation
    await sourceElementLocator.dragTo(destinationLocator);
  }
}
