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

    await page2.goto('http://executeautomation.com/demosite/Login.html');

    //CSS identifier
    const userName = await page2.$('[name=UserName]');
    await userName.type('executeautomation');

    //$$
    const password = await page2.$$('[name=Password]');
    await password[0].type('admin');


    //Xpath
    // await page2.$x('//input[@name=Password]').then(ele => {
    //     ele[0].type("admin");
    // });

    await page2.keyboard.press('Enter', { delay: 2000 });


    //menu
    const result = await page2.evaluate(() => {
        [...element] = document.querySelectorAll('div[id=cssmenu] li');
        return [...element].map(x => x.textContent);
    });

    //Using spread syntax I can get the text out
    [...result].forEach(x => {
        console.log(x);
    })


    //Dynamically click links
    const postsSelector = 'ul li a';
    const menuUrls = await page2.$$eval(postsSelector, postsLink => postsLink.map(links => links.href));


    //iterate the menuUrls
    for (let menuUrl of menuUrls) {
        try {
            await page2.goto(menuUrl)
            console.log("Navigated to the page: ", menuUrl);
        }
        catch (error) {
            console.log(error);
        }
    }

    await browser.close();

})();