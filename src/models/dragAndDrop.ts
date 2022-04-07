import { Locator, Page } from "@playwright/test";

export class DragAndDropPage {
  readonly page: Page;
  readonly sourceElementLocator: Locator;
  readonly destinationElementLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sourceElementLocator = page.locator("id=column-a");
    this.destinationElementLocator = page.locator("id=column-b");
  }

  // goto baseUrl/drag_and_drop
  async goto() {
    await this.page.goto("/drag_and_drop");
  }

  /**
   * Drag an Element to a desintation
   * In a real world example the source and destination would be parameters
   * of this function
   */
  async dragAndDrop() {
    // perform drag operation
    await this.sourceElementLocator.dragTo(this.destinationElementLocator);
  }
}
