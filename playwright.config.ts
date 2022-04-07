import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  // globalSetup: require.resolve("./src/globalSetup/global-setup"),
  timeout: 20000,
  retries: 2,
  use: {
    baseURL: "https://the-internet.herokuapp.com",
    headless: true,
    ignoreHTTPSErrors: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    //storageState: "state.json",
  },
};
export default config;
