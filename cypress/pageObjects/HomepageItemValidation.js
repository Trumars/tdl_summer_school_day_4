import BasePage from "./basePage";

class HomepageItemValidation extends BasePage {
  static get verifyNumberOfItems() {
    return cy.get("div[class='inventory_item']");
  }
}

export default HomepageItemValidation;