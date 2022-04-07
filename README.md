# playwrightExamples

# Quick Start

**This repo is built and tested with the current Node LTS version**

### Install Dependencies

`npm i`

### Install browsers

`npx playwright install`

# Run Tests

`npx playwright test -g 'Login' --headed`

---

## About

Playwright Test is a JavaScript based, fully featured automation framework created by the Developer Division at Microsoft. Playwright Test was built specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from a regular test runner, and more.

---

## List all test titles

`npx playwright test --list`

---

## File Structure

    .
    ├── node_modules            # Dependencies
    ├── src                     # Project
    │   ├── fixtures            # Test setup and dependency logic.
    │   ├── models              # Classes representing functionality of pages or concepts
    │   └── test                # Spec files grouping methods from models
    ├── *-setup.ts              # Global before all functions
    ├── *.config.ts             # Browser and test configuration options
    ├── package.json            # Project metadata
    ├── package-lock.json       # Describes dependency tree
    └── README.md               # This file

## Playwright Test allows us to:

> Run tests across all browsers.

> Execute tests in parallel.

> Persist and re-use UI state.

> Use Auto-wait (actionability) strategies

> Test Parameterization

> Capture videos, screenshots and other artifacts on failure.

Source: https://playwright.dev/docs/intro/

---

## Cross Browser Testing

Playwright supports Chrome, Firefox, and Webkit (Safari/iOS) out of the box. msEdge and other browsers are available with additional configuration. All browsers have configurable options through configuration files and command line arguments.

### Configuration Reference

https://playwright.dev/docs/test-configuration

### Run tests with Chrome, Firefox, and Webkit

`npx playwright test --browser=all`

---

## Parallelization

Playwright runs tests in parallel by default. It will allocate a worker to each core of the machine running the tests. This feature can be configured via configuration file and command line with the `--workers=NUMBER` option. Playwright Test can also shard a test suite, so that it can be executed on multiple machines.

### Reference

https://playwright.dev/docs/test-parallel

### Disable Parallelization

`npx playwright test --workers=1`

---

## Persist and Re-use UI State.

Playwright provides a way to reuse the signed-in (or more complex) states in the tests. That way you can log in only once and then skip the log in step for all of the tests. This entails creating a `global-setups.ts` file and using it in `playwright.config.ts`. The global setup file writes session information as json. These files can be used to persist any valid state of an application.

### Reference

https://playwright.dev/docs/test-auth

---

## Auto-waiting and Actionability checks

Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError.

For example, for `page.click(selector[, options])`, Playwright will ensure that:

> element is Attached to the DOM

> element is Visible

> element is Stable, as in not animating or completed animation

> element Receives Events, as in not obscured by other elements

> element is Enabled

### Reference

https://playwright.dev/docs/actionability

---

## Test Parameterization

### Example

See `/src/test/pharma/filterPatients.spec.ts` for example

```
const people = ['Alice', 'Bob'];

for (const name in people) {
    test(`testing with ${name}`, async () => {
        // ... test logic
    });
```

### Reference

https://playwright.dev/docs/test-parameterize

---

## Capture videos, screenshots and other artifacts on failure.

Playwright can configurably generate media during test runs. The most complete and useful test artifact is known as a Trace. Traces capture images, video, network logs, console errors, source code, and a timeline of your test. In this repo, we capture traces on test failure. A trace file and instructions on opening it are printed to the commandline on test failure.

### Reference

https://playwright.dev/docs/debug
