import { test, expect } from "@playwright/test";
import { readFileSync } from "fs";
import { join } from "path";

const stableCSS = readFileSync(
  join(__dirname, "fixtures", "stable.css"),
  "utf-8"
);

/**
 * Inject the stable CSS to freeze animations before each VRT.
 */
async function stabilize(page: import("@playwright/test").Page) {
  await page.addStyleTag({ content: stableCSS });
  // Give the browser one frame to apply the frozen styles
  await page.waitForTimeout(100);
}

// Visual regression tests run in 4 viewport projects:
// vrt-mobile, vrt-tablet, vrt-desktop, vrt-ultrawide

const snapRoutes = [
  { path: "/", name: "homepage" },
  { path: "/vision", name: "vision" },
  { path: "/logros", name: "logros" },
  { path: "/reformas", name: "reformas" },
];

for (const route of snapRoutes) {
  test(`${route.name} above-the-fold`, async ({ page }) => {
    await page.goto(route.path);
    await page.waitForLoadState("domcontentloaded");
    await stabilize(page);

    await expect(page).toHaveScreenshot(`${route.name}-atf.png`, {
      maxDiffPixelRatio: 0.01,
    });
  });
}

test("homepage full page", async ({ page }) => {
  test.setTimeout(60_000);
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
  await stabilize(page);

  await expect(page).toHaveScreenshot("homepage-full.png", {
    fullPage: true,
    maxDiffPixelRatio: 0.02,
    timeout: 30_000,
  });
});

test("footer", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
  await stabilize(page);

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(200);

  await expect(page).toHaveScreenshot("footer.png", {
    maxDiffPixelRatio: 0.01,
  });
});
