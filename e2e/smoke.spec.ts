import { test, expect } from "@playwright/test";

const routes = [
  { path: "/", title: /Javier Milei/ },
  { path: "/vision", title: /Visión/ },
  { path: "/logros", title: /Resultados|Logros/ },
  { path: "/reformas", title: /Reformas/ },
  { path: "/mundo", title: /Relaciones|Internacional/ },
  { path: "/futuro", title: /Proyectos|Futuro/ },
  { path: "/archivo", title: /Archivo/ },
];

for (const route of routes) {
  test(`${route.path} loads with correct title`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(route.title);
  });

  test(`${route.path} has header, main, and footer`, async ({ page }) => {
    await page.goto(route.path);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("main#main-content")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });
}

test("404 page renders for unknown route", async ({ page }) => {
  await page.goto("/nonexistent-route");
  await expect(page.locator("main")).toBeVisible();
});
