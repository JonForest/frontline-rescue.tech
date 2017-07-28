import { FrontlineRescue.TechPage } from './app.po';

describe('frontline-rescue.tech App', () => {
  let page: FrontlineRescue.TechPage;

  beforeEach(() => {
    page = new FrontlineRescue.TechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
