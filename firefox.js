const puppeteerChrome = require("puppeteer");
const puppeteerFirefox = require("puppeteer-firefox");

(async () => {
  const test = async (browser) => {
    //Page
    const page = await browser.newPage();

    //Set view port of the page
    await page.setViewport({
      width: 1440,
      height: 10000,
    });

    await page.goto("http://executeautomation.com/demosite/Login.html");
    await page.type("[name=UserName]", "executeautomation");
    await page.type("[name=Password]", "admin");
    await page.keyboard.press("Enter", { delay: 2000 });

    //hover
    await page.hover("[id='Automation Tools']");

    await browser.close();
  };

  const chrome = await puppeteerChrome.launch({
    headless: false,
    product: "firefox",
    args: ["-wait-for-browser"],
    slowMo: 50,
    executablePath: "C:/Program Files/Firefox Nightly/firefox.exe",
  });

  //Chrome browser
  await test(chrome);
})();
