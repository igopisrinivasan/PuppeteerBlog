const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        "headless": true,
        "slowMo": 50
    });
    //Page
    const page2 = await browser.newPage();

    //Set view port of the page
    await page2.setViewport({
        "width": 1440,
        "height": 10000
    });

    await page2.goto('http://executeautomation.com/demosite/Login.html', { "waitUntil": 'networkidle2' });
    await page2.type('[name=UserName]', 'executeautomation');
    await page2.type('[name=Password]', 'admin');
    await page2.keyboard.press('Enter');
    //Wait for
    await page2.waitFor(() => document.querySelector("[id=Initial]"));
    await page2.type('input[id=Initial]', 'KK');

    //PDF
    await page2.pdf({ "path": "eapage.pdf", "format": 'A4' })

    await browser.close();

})();