#!/bin/bash
# run the test(s) in login.spec.ts with a
# maximum timeout in milliseconds for a whole test run
# there is no default value for this option
npx playwright test login --global-timeout 30000