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
        "height":10000
    });

    await page2.goto('http://executeautomation.com/demosite/Login.html');
    await page2.type('[name=UserName]', 'executeautomation');
    await page2.type('[name=Password]', 'admin');
    await page2.keyboard.press('Enter', {delay:2000});

    //hover
    await page2.hover("[id='Automation Tools']");

    await browser.close();

})();