const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });

  const context = await browser.createIncognitoBrowserContext();

  //Page
  //const page = await browser.newPage();

  //Incognito
  const page = await context.newPage();

  //Save browser endpoint
  const browserSession = browser.wsEndpoint();

  //disconnect from chrome
  // await browser.disconnect();

  //connect puppeteer
  // const browser2 = await puppeteer.connect({ "browserWSEndpoint": browserSession });

  //Reconnect with the same browser endpoint
  // const page2 = await browser2.newPage();

  //  await page2.goto('http://executeautomation.com/demosite/index.html?UserName=&Password=&Login=Login');
  //  await page2.type('[name=UserName]', 'executeautomation');

  await browser.close();
})();
