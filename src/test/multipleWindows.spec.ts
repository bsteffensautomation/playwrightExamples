import { test } from "@playwright/test";
import { MultipleWindows } from "../models/multipleWindows";

test("Open Multiple Windows", async ({ page }) => {
  const multipleWindows = new MultipleWindows(page);
  await multipleWindows.goto();
  await multipleWindows.openNewPage();
  await multipleWindows.newPageElement();
});
