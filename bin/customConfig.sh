#!/bin/bash
#  run the test(s) in /test/login.spec.ts 
#  with a custom config file
#  more about config here https://playwright.dev/docs/test-configuration
npx playwright test login --config=customConfig.config.ts