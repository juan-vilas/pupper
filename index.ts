import { Browser, Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

export default async function getBrowser(): Promise<[Browser, Page]> {
  let browser = await puppeteer.launch({
    headless: false,
  });
  let page = (await browser.pages())[0];
  return [browser, page];
}
