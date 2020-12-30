const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        "headless": false,
        "slowMo": 50
    });
    //Page
    const page2 = await browser.newPage();

    //Set view port of the page
    await page2.setViewport({
        "width": 1440,
        "height": 10000
    });

    await page2.setRequestInterception(true);

    page2.on('request', interceptedRequest => {

        if (interceptedRequest.url().endsWith('.jpg') || interceptedRequest.url().endsWith('.png'))
            interceptedRequest.abort();
        else
            interceptedRequest.continue();
    });

    await page2.goto("https://www.amazon.in")

    //await browser.close();

})();