import { Angular2CartPage } from './app.po';

describe('angular2-cart App', function() {
  let page: Angular2CartPage;

  beforeEach(() => {
    page = new Angular2CartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
