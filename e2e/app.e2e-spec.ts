import { FeedBackSurvey } from './app.po';

describe('surveyjs-angular-cli App', () => {
  let page: FeedBackSurvey;

  beforeEach(() => {
    page = new FeedBackSurvey();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
