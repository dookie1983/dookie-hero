import { HeroDookiePage } from './app.po';

describe('hero-dookie App', () => {
  let page: HeroDookiePage;

  beforeEach(() => {
    page = new HeroDookiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
