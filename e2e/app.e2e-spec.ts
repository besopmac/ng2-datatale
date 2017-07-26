import { Ng2DatatalePage } from './app.po';

describe('ng2-datatale App', () => {
  let page: Ng2DatatalePage;

  beforeEach(() => {
    page = new Ng2DatatalePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
