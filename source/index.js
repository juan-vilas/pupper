"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.Browser = exports.getText = exports.getBrowser = void 0;
const puppeteer_1 = require("puppeteer");
Object.defineProperty(exports, "Browser", { enumerable: true, get: function () { return puppeteer_1.Browser; } });
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return puppeteer_1.Page; } });
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
function getBrowser({ browserURL } = { browserURL: undefined }) {
    return __awaiter(this, void 0, void 0, function* () {
        let browser;
        let config = { defaultViewport: null };
        if (browserURL) {
            config.browserURL = browserURL;
            browser = yield puppeteer_extra_1.default.connect(config);
        }
        else {
            config.headless = false;
            browser = yield puppeteer_extra_1.default.launch(config);
        }
        let page = (yield browser.pages())[0];
        return [browser, page];
    });
}
exports.getBrowser = getBrowser;
function getText(page, element) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield page.evaluate((el) => el.textContent, element);
    });
}
exports.getText = getText;
