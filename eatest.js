const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  await page.goto("https://demosite.executeautomation.com/Login.html");
  await page.type("[name=UserName]", "executeautomation");
  await browser.close();
})();
