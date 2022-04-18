import { Page } from "@playwright/test";

export class BlankClass {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async myMethod() {
    // do something
  }
}
