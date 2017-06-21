import { CarDealerPage } from './app.po';

describe('car-dealer App', () => {
  let page: CarDealerPage;

  beforeEach(() => {
    page = new CarDealerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getMenuTitle()
      .then(msg => expect(msg).toEqual('Car Dealer'))
      .then(done, done.fail);
  });

  it('should have links', done => {
    page.navigateTo();
    page.getMenuLinkAmount()
      .then(amount => expect(amount).toBeGreaterThan(0))
      .then(done, done.fail);
  });

  it('should have cars', done => {
    page.navigateToCars();
    page.getCarAmount()
      .then(amount => expect(amount).toBeGreaterThan(0))
      .then(done, done.fail);
  });

  it('compare button should be disabled from the start', done => {
    page.navigateToCars();
    page.compareButtonStatus()
      .then(enabled => expect(enabled).toBe(false))
      .then(done, done.fail);
  });

  it('compare button should be disabled if 1 car is selected', done => {
    page.navigateToCars();
    page.selectCar(0);
    page.compareButtonStatus()
      .then(enabled => expect(enabled).toBe(false))
      .then(done, done.fail);
  });

  it('compare button should be enabled if 2 cars are selected', done => {
    page.navigateToCars();
    page.selectCar(0);
    page.selectCar(1);
    page.compareButtonStatus()
      .then(enabled => expect(enabled).toBe(true))
      .then(done, done.fail);
  });

  it('should allow to compare 2 cars', done => {
    page.navigateToCars();
    page.selectCar(0);
    page.selectCar(1);
    page.clickOnCompareButton();
    page.getCompareColumnsAmount()
      .then(amount => expect(amount).toBe(3))
      .then(done, done.fail);
  });

  it('should allow to compare 3 cars', done => {
    page.navigateToCars();
    page.selectCar(0);
    page.selectCar(1);
    page.selectCar(2);
    page.clickOnCompareButton();
    page.getCompareColumnsAmount()
      .then(amount => expect(amount).toBe(4))
      .then(done, done.fail);
  });

  it('should NOT allow to compare 4 cars', done => {
    page.navigateToCars();
    page.selectCar(0);
    page.selectCar(1);
    page.selectCar(2);
    page.selectCar(3);

    page.getCompareErrorMessage()
      .then(displayed => expect(displayed).toBe(true))
      .then(done, done.fail);
  });
});
