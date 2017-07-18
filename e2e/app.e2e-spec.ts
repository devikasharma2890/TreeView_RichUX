import { TreeViewRichUXPage } from './app.po';

describe('tree-view-rich-ux App', () => {
  let page: TreeViewRichUXPage;

  beforeEach(() => {
    page = new TreeViewRichUXPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
