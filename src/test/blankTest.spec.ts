import { test } from "@playwright/test";
import { BlankClass } from "../models/blankClass";

test("Test Title", async ({ page }) => {
  const blankClassInstance = new BlankClass(page);
  await blankClassInstance.myMethod();
});
