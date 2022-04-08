#!/bin/bash
#  NOTE: at the time of writing html reporter disables paralellization
#  run the test(s) in /test/login.spec.ts 
#  and generate an html report
#  view report with `npx playwright show-report` ,  this message prints to stdout
#  the report is interactive! and is stored in a created dir called playwright-report
npx playwright test login --reporter=html