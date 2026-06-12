const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/home/jarvis/.hermes/profiles/coder/home/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  
  page.on('console', msg => console.log('CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  // Serve from a local server to have proper MIME types
  const url = 'file://' + path.resolve(__dirname, 'test_tonal.html');
  
  console.log('Navigating to:', url);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for test to complete (up to 30s)
  await page.waitForFunction(
    () => document.getElementById('output').textContent.includes('DONE') || 
           document.getElementById('output').textContent.includes('ERROR'),
    { timeout: 30000 }
  ).catch(() => {});

  const output = await page.evaluate(() => document.getElementById('output').textContent);
  console.log('=== PAGE OUTPUT ===');
  console.log(output);

  await browser.close();
})();
