import { AngularEssentialsPage } from './app.po';

describe('angular-essentials App', () => {
  let page: AngularEssentialsPage;

  beforeEach(() => {
    page = new AngularEssentialsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
