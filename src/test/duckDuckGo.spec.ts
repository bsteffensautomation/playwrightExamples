import { test } from "@playwright/test";
import { DuckDuckGo } from "../models/duckDuckGo";

test("Search", async ({ page }) => {
  const duck = new DuckDuckGo(page);
  duck.goto();
  await duck.search("dang");
});
