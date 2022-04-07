import { test } from "@playwright/test";
import { LoginPage } from "../models/login";

test.describe.parallel("Top Nav @smoke", () => {
  test("Give Feedback", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("tomsmith", "SuperSecretPassword!");
  });
});
