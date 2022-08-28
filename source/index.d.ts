import { Browser, Page } from "puppeteer";
export default function getBrowser({ browserURL }?: {
    browserURL: string | undefined;
}): Promise<[Browser, Page]>;
export { Browser, Page };
