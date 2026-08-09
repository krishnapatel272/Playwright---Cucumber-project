const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;

BeforeAll(async function () {
    console.log('Starting browser...');
    
    browser = await chromium.launch({
        headless: false
    });

    console.log('Browser started!');
});

Before(async function () {
    console.log('Creating page...');

    this.context = await browser.newContext();
    this.page = await this.context.newPage();
});

After(async function () {
    if (this.context) {
        await this.context.close();
    }
});

AfterAll(async function () {
    if (browser) {
        await browser.close();
    }
});