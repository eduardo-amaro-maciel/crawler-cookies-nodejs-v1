/**
 * O setTimout atua como um bloqueio até todos 
 * os cookies estarem carregados
 * ex: '_ga' e outros de terceiros
 */

const puppeteer = require('puppeteer');


const DELAY = 20000; // setTimeout
const URL_SITE = 'https://www.youtube.com/'; // site a ser acessado


(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL_SITE);

    setTimeout(async () => {

        const cookies = await page.cookies();

        const cookiesPorEvaluate = await page.evaluate(() => {
            return document.cookie.split(';');
        });

        console.log(cookies);
        console.log(cookiesPorEvaluate);

        await browser.close();

    }, DELAY);
})();