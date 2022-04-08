#!/bin/bash
#  run the all tests and stop after the first N failures.
#  passing '-x' here instead of an integer stops the test run after a single failure
npx playwright test --max-failures=2