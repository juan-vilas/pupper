import { Browser, Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

export default async function getBrowser(
  { browserURL }: { browserURL: string | undefined } = { browserURL: undefined }
): Promise<[Browser, Page]> {
  let browser;
  let config: any = { defaultViewport: null };

  if (browserURL) {
    config.browserURL = browserURL;
    browser = await puppeteer.connect(config);
  } else {
    config.headless = false;
    browser = await puppeteer.launch(config);
  }

  let page = (await browser.pages())[0];
  return [browser, page];
}

export { Browser, Page };
