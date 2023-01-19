import { Browser, ElementHandle, Page } from "puppeteer";
export declare function getBrowser({ browserURL }?: {
    browserURL: string | undefined;
}): Promise<[Browser, Page]>;
export declare function getText(page: Page, element: ElementHandle<Element>): Promise<string | null>;
export declare function wait(miliseconds: number): Promise<void>;
export { Browser, Page };
