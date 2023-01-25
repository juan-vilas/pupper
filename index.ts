import { Browser, ElementHandle, Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

let _browser: Browser, _page: Page;

export async function getBrowser(
  { browserURL }: { browserURL: string | undefined } = { browserURL: undefined }
): Promise<[Browser, Page]> {
  let config: any = { defaultViewport: null };

  if (browserURL) {
    config.browserURL = browserURL;
    _browser = await puppeteer.connect(config);
  } else {
    config.headless = false;
    _browser = await puppeteer.launch(config);
  }

  _page = (await _browser.pages())[0];
  return [_browser, _page];
}

export async function getText(page: Page, element: ElementHandle<Element>) {
  return await page.evaluate((el) => el.textContent, element);
}

export async function wait(
  page: Page,
  miliseconds: number,
  margin: number = 3000
) {
  let waitThis = randomIntFromInterval(
    miliseconds - margin,
    miliseconds + margin
  );
  console.log(`Waiting ${waitThis} ms`);
  await page.waitForTimeout(waitThis);
}

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export async function getProperty(
  page: Page,
  element: ElementHandle<Element>,
  attribute: string
) {
  return await page.evaluate(
    (el: any, attr: string) => {
      return el.getAttribute(attr);
    },
    element,
    attribute
  );
}

export { Browser, Page };
