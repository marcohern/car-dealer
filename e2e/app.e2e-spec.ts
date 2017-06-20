import { CarDealerPage } from './app.po';

describe('car-dealer App', () => {
  let page: CarDealerPage;

  beforeEach(() => {
    page = new CarDealerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
