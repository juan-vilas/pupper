import { Browser, Page } from "puppeteer";
export default function getBrowser(): Promise<[Browser, Page]>;
