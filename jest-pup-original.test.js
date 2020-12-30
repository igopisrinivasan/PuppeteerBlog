const puppeteer = require("puppeteer");

describe("EA Testing suite", async () => {
  var browser;
  var page;
  //Browser - Hooks
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
    });

    page = await browser.newPage();
  });

  it("Test Login functionality", async () => {
    await page.type("[name=UserName]", "executeautomation");
    await page.type("[name=Password]", "admin");
    await page.keyboard.press("Enter", { delay: 2000 });
  });
});
