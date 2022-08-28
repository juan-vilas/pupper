import { Browser, ElementHandle, Page } from "puppeteer";
export default function getBrowser({ browserURL }?: {
    browserURL: string | undefined;
}): Promise<[Browser, Page]>;
export declare function getText(page: Page, element: ElementHandle<Element>): Promise<string | null>;
export { Browser, Page };
