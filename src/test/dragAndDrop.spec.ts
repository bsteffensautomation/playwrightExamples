import { test } from "@playwright/test";
import { DragAndDropPage } from "../models/dragAndDrop";

test("Drag And Drop", async ({ page }) => {
  const dragAndDropPage = new DragAndDropPage(page);
  await dragAndDropPage.goto();
  await dragAndDropPage.dragAndDrop();
});
