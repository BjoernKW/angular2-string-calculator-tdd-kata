import { Angular2StringCalculatorTddKataPage } from './app.po';

describe('angular2-string-calculator-tdd-kata App', function() {
  let page: Angular2StringCalculatorTddKataPage;

  beforeEach(() => {
    page = new Angular2StringCalculatorTddKataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
