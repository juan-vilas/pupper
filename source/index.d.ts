import { Browser, ElementHandle, Page } from "puppeteer";
export declare function getBrowser({ browserURL }?: {
    browserURL: string | undefined;
}): Promise<[Browser, Page]>;
export declare function getText(page: Page, element: ElementHandle<Element>): Promise<string | null>;
export declare function wait(page: Page, miliseconds: number, margin?: number): Promise<void>;
export declare function getProperty(page: Page, element: ElementHandle<Element>, attribute: string): Promise<any>;
export { Browser, Page };
