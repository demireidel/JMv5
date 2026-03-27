import { test, expect } from "@playwright/test";

test.describe("ARIA landmark structure", () => {
  test("homepage has correct landmark hierarchy", async ({ page }) => {
    await page.goto("/");

    // Banner (header with nav)
    const banner = page.getByRole("banner");
    await expect(banner).toBeVisible();
    await expect(
      banner.getByRole("navigation", { name: /principal/i })
    ).toBeVisible();

    // Main content
    const main = page.getByRole("main");
    await expect(main).toBeVisible();

    // Content info (footer)
    const footer = page.getByRole("contentinfo");
    await expect(footer).toBeVisible();
    await expect(
      footer.getByRole("navigation", { name: /pie/i })
    ).toBeVisible();
  });

  test("vision page has heading hierarchy", async ({ page }) => {
    await page.goto("/vision");

    // h1 exists
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();

    // h2s exist for chapters
    const h2s = page.getByRole("heading", { level: 2 });
    expect(await h2s.count()).toBeGreaterThanOrEqual(5);
  });

  test("logros page has main landmark and heading", async ({ page }) => {
    await page.goto("/logros");
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
