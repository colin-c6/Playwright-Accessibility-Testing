# Playwright Accessibility Testing

This repository contains code for generating accessibility reports using Playwright and Axe-core in various news websites. The tests are written using Playwright's testing framework.

## Prerequisites

Before running the tests, make sure you have the following dependencies installed:

- Node.js
- NPM (Node Package Manager)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:

   ```
   npm install
   ```

## Configuration

No additional configuration is required to run the tests.

## Usage

To generate accessibility reports for the news websites, run the following command:

```
npm test
```

The tests will be executed using Playwright, and for each news website specified in the test file, an accessibility report will be generated in the `axe-reports` directory. The report files will be named based on the broadcaster (e.g., `bbc.html`, `cnn.html`, `foxnews.html`).

Example report:
![image](https://github.com/colin-c6/Playwright-Accessibility-Testing/assets/35725601/94c592c4-178e-4e48-8902-2291001d31e2)


## Dependencies

The following dependencies are required for running the tests:

- `@playwright/test`: Version 1.33.0 or later.
- `@axe-core/playwright`: Version 4.7.0 or later.
- `axe-html-reporter`: Version 2.2.3 or later.

These dependencies will be automatically installed when running `npm install`.

## Credits

This project utilizes the following open-source libraries:

- [Playwright](https://playwright.dev/)
- [Axe-core](https://github.com/dequelabs/axe-core)
- [Axe HTML Reporter](https://github.com/dequelabs/axe-html-reporter)
