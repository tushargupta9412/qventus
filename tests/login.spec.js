import { test, expect } from "@playwright/test";
import { login } from "../utils/login";
import testData from "../utils/testData.json";


let context;
let page;

test.describe("Authentication Tests", () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(testData.URL);
  });

  test.afterAll(async ({ }) => {
    await context.close();
    
  });

  test("Sign in with invalid credential", async () => {
    await login({
      page: page,
      emailId: testData.cred.invalidEmailId,
      password: testData.cred.invalidPassword 
    });
    await expect(page.getByText("Unable to sign in")).toBeVisible();
  });
});