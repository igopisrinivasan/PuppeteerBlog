const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://demosite.executeautomation.com/Login.html");

  await browser.close();
})();
