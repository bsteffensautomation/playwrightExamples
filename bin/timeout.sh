#!/bin/bash
# run the test(s) in login.spec.ts with a
# maximum timeout in milliseconds for each test, defaults to 30 seconds.
npx playwright test login --timeout 10000