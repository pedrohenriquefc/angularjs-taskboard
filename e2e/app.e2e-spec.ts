import { AngularjsTaskboardPage } from './app.po';

describe('angularjs-taskboard App', () => {
  let page: AngularjsTaskboardPage;

  beforeEach(() => {
    page = new AngularjsTaskboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
