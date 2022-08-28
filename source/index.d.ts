import { Browser, Page } from "puppeteer";
export default function getBrowser({ browserURL, }?: {
    browserURL?: undefined;
}): Promise<[Browser, Page]>;
