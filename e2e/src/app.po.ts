import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getText(s: string) {
    return element(by.css(s)).getText() as Promise<string>;
  }
}
