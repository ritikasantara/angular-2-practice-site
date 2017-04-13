import { Angular2practice1Page } from './app.po';

describe('angular2practice1 App', () => {
  let page: Angular2practice1Page;

  beforeEach(() => {
    page = new Angular2practice1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
