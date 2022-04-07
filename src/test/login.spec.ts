import { test } from "@playwright/test";
import { LoginPage } from "../models/login";

test("Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("tomsmith", "SuperSecretPassword!");
});
