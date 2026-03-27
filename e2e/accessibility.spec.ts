import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const keyPages = ["/", "/vision", "/logros", "/reformas"];

for (const path of keyPages) {
  test(`${path} has no critical axe violations`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState("domcontentloaded");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .disableRules(["color-contrast"]) // oklch colors can't be parsed by axe
      .analyze();

    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );

    if (critical.length > 0) {
      const summary = critical
        .map(
          (v) =>
            `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} nodes)`
        )
        .join("\n");
      expect(critical, `Axe violations:\n${summary}`).toHaveLength(0);
    }
  });
}

test.describe("Reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("homepage content is immediately visible", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Main content should be visible with no animation-delayed hiding
    await expect(page.locator("main#main-content")).toBeVisible();
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("vision page content is immediately visible", async ({ page }) => {
    await page.goto("/vision");
    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("main#main-content")).toBeVisible();
    await expect(page.locator("article")).toBeVisible();
  });
});
