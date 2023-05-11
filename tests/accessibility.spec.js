import { test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { createHtmlReport } from "axe-html-reporter";

const newsWebsites = {
  bbc: "https://www.bbc.com/",
  cnn: "https://www.cnn.com/",
  foxnews: "https://www.foxnews.com/",
};

for (const broadcaster in newsWebsites) {
  const url = newsWebsites[broadcaster];
  test(`Generate Accessibility Report on website homepage of broadcaster: ${broadcaster} `, async ({
    page,
  }) => {
    await page.goto(url);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        outputDir: "axe-reports",
        reportFileName: `${broadcaster}.html`,
      },
    });
  });
}
