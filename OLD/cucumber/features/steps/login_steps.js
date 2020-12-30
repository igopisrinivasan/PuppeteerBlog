const { Given, When, Then } = require("cucumber");
const puppeteer = require('puppeteer');

var browser;
var page;

Given("I open EA Demo site", async function () {
    browser = await puppeteer.launch({
        "headless": false,
        "slowMo": 50
    });

    page = await browser.newPage();

    await page.goto("http://executeautomation.com/demosite/Login.html");
});

Given("I enter user name and password", async function () {
    await page.type('[name=UserName]', 'executeautomation');
    await page.type('[name=Password]', 'admin');
    await page.keyboard.press('Enter', { delay: 2000 });
});
