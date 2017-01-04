import { browser, element, by } from 'protractor';

export class Angular2StringCalculatorTddKataPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getResultText() {
    return element(by.id('result')).getText();
  }

  submitForm() {
    element(by.css('app-root form')).submit();
  }

  setInput(value: string) {
    element(by.id('numbers')).sendKeys(value);
  }
}
