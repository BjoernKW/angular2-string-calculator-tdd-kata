import { Angular2StringCalculatorTddKataPage } from './app.po';

describe('angular2-string-calculator-tdd-kata App', function() {
  let page: Angular2StringCalculatorTddKataPage;

  beforeEach(() => {
    page = new Angular2StringCalculatorTddKataPage();
    page.navigateTo();
  });

  it(`should display message saying 'String Calculator'`, () => {
    expect(page.getParagraphText()).toEqual('String Calculator');
  });

  it('should calculate a sum', () => {
    page.setInput('1,1000,3,4,1001');
    page.submitForm();
    expect(page.getResultText()).toEqual('1008');
  });
});
