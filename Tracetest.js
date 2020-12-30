const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  //Page
  const page2 = await browser.newPage();

  //Set view port of the page
  await page2.setViewport({
    width: 1440,
    height: 10000,
  });

  await page2.tracing.start({ path: "trace.json" });
  await page2.goto("http://executeautomation.com/demosite/Login.html", {
    waitUntil: "networkidle2",
  });
  await page2.type("[name=UserName]", "executeautomation");
  await page2.type("[name=Password]", "admin");
  await page2.keyboard.press("Enter");

  //Wait for navigation
  // await page2.waitForNavigation({
  //     "waitUntil":'domcontentloaded'
  // })

  //Wait for control
  //await page2.waitForSelector("input[id=Initial]");

  //Wait for
  await page2.waitFor(() => document.querySelector("[id=Initial]"));

  await page2.type("input[id=Initial]", "KK");

  await page2.screenshot({ path: "userform.png" });
  await page2.pdf({ path: "eapage.pdf", format: "A4" });
  //Stop Tracing
  await page2.tracing.stop();

  await browser.close();
})();
