const puppeteer = require('puppeteer');
const pti = require('puppeteer-to-istanbul');

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

    await Promise.all([
        page2.coverage.startJSCoverage(),
        page2.coverage.startCSSCoverage()
    ]);

    await page2.goto('http://executeautomation.com/demosite/Login.html', { "waitUntil": 'networkidle2' });
    await page2.type('[name=UserName]', 'executeautomation');
    await page2.type('[name=Password]', 'admin');
    await page2.keyboard.press('Enter');
    //Wait for
    await page2.waitFor(() => document.querySelector("[id=Initial]"));
    await page2.type('input[id=Initial]', 'KK');

    const [jsCoverage, cssCoverage] = await Promise.all([
        page2.coverage.stopJSCoverage(),
        page2.coverage.stopCSSCoverage(),
    ]);
    let totalBytes = 0;
    let usedBytes = 0;
    const coverage = [...jsCoverage, ...cssCoverage];
    for (const entry of coverage) {
        totalBytes += entry.text.length;
        for (const range of entry.ranges)
            usedBytes += range.end - range.start - 1;
    }
    console.log(`Bytes used: ${usedBytes / totalBytes * 100}%`);

    pti.write([...jsCoverage,...cssCoverage]);

    await browser.close();

})();