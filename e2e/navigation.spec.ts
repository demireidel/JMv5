import { test, expect } from "@playwright/test";

test.describe("Desktop navigation", () => {
  test("nav links navigate correctly @desktop-chrome", async ({
    page,
    browserName,
  }, testInfo) => {
    test.skip(testInfo.project.name === "mobile-chrome", "Desktop only");
    await page.goto("/");

    const link = page.locator("header ul a").filter({ hasText: "Logros" });
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/logros/);
  });

  test("active link has aria-current @desktop-chrome", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name === "mobile-chrome", "Desktop only");
    await page.goto("/vision");

    const active = page.locator('header a[aria-current="page"]');
    await expect(active).toBeVisible();
    await expect(active).toHaveText("Visión");
  });
});

test.describe("Mobile navigation", () => {
  test("hamburger opens and closes menu", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "desktop-chrome", "Mobile only");

    await page.goto("/");
    const hamburger = page.getByRole("button", { name: /menú/i });
    await expect(hamburger).toBeVisible();

    await hamburger.click();
    const overlay = page.locator('[aria-label="Menú móvil"]');
    await expect(overlay).toBeVisible();

    await page.keyboard.press("Escape");
    // After close, the overlay parent should have aria-hidden="true"
    const overlayContainer = page.locator('[aria-hidden="true"]').filter({ has: overlay });
    await expect(overlayContainer).toBeVisible();
  });

  test("mobile menu navigates", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "desktop-chrome", "Mobile only");

    await page.goto("/");
    await page.getByRole("button", { name: /menú/i }).click();
    await page
      .locator('[aria-label="Menú móvil"] a')
      .filter({ hasText: "Reformas" })
      .click();
    await expect(page).toHaveURL(/\/reformas/);
  });
});

test.describe("Keyboard & skip link", () => {
  test("skip link is focusable @desktop-chrome", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name === "mobile-chrome", "Desktop only");
    await page.goto("/");

    await page.keyboard.press("Tab");
    const skipLink = page.locator("a.skip-link");
    await expect(skipLink).toBeFocused();
  });

  test("Tab reaches header links @desktop-chrome", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name === "mobile-chrome", "Desktop only");
    await page.goto("/");

    // Tab: skip-link → home link → first nav link
    for (let i = 0; i < 3; i++) await page.keyboard.press("Tab");

    const focused = page.locator(":focus");
    const tag = await focused.evaluate((el) => el.tagName);
    expect(tag).toBe("A");
  });
});
