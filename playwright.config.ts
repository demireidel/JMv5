import { defineConfig, devices } from "@playwright/test";

const PORT = 3001;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  outputDir: "./e2e/.results",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [["html", { open: "never" }], ["github"]]
    : [["html", { open: "on-failure" }]],

  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    // ── Functional tests (smoke, nav, a11y) ───────────────────
    {
      name: "desktop-chrome",
      testIgnore: /visual/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      testIgnore: /visual/,
      use: { ...devices["Pixel 7"] },
    },

    // ── Visual regression tests ───────────────────────────────
    {
      name: "vrt-mobile",
      testMatch: /visual/,
      use: { ...devices["iPhone 14"] },
    },
    {
      name: "vrt-tablet",
      testMatch: /visual/,
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: "vrt-desktop",
      testMatch: /visual/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "vrt-ultrawide",
      testMatch: /visual/,
      use: { viewport: { width: 2560, height: 1080 } },
    },
  ],

  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    port: PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
