const { Given, When, Then } = require("cucumber");
const puppeteer = require('puppeteer');

Then("I see home page", async function () {
    await page.type('input[id=Initial]', 'KK');
});
