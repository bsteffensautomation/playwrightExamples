import { test } from "@playwright/test";
import { iFrame } from "../models/iFrame";

test("iFrame", async ({ page }) => {
  const iFramePage = new iFrame(page);
  await iFramePage.goto();
  await iFramePage.useIFrame();
});
