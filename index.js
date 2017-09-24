
//docs: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagecookiesurls

//github: https://github.com/GoogleChrome/puppeteer
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setCookie(
    {
        name: 'access_token',
        value: 'access_token_value',
        domain:'google.com.com.au',
        path: "/",
        Expires:"Session",
    }
  ),

  await page.goto('https://google.com.au');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com.au', {waitUntil: 'networkidle'});
    await page.pdf({path: 'example.pdf', format: 'A4'});
  
    await browser.close();
  })();