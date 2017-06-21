import { browser, by, element } from 'protractor';

export class CarDealerPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenuTitle() {
    return element(by.css('a.navbar-brand')).getText();
  }

  getMenuLinkAmount() {
    return element.all(by.css('ul.nav.navbar-nav li')).count();
  }

  navigateToCars() {
    return browser.get('/cars');
  }

  getCarAmount() {
    return element.all(by.css('div.car-summary')).count();
  }

  selectCar(index) {
    let buttons = element.all(by.css('div.car-summary div.options'));
    return buttons.get(index).all(by.css('a')).get(0).click();
  }

  clickOnCompareButton() {
    let button = element(by.css('nav.compare-queue > ul > li > button'));
    return button.click();
  }

  compareButtonStatus() {
    let button = element(by.css('nav.compare-queue > ul > li > button'));
    return button.isEnabled();
  }

  getCompareColumnsAmount() {
    return element.all(by.css('table > thead > tr > th')).count();
  }

  getCompareErrorMessage() {
    return element(by.css('.alert.alert-danger')).isDisplayed();
  }
}
