import BasePage from "./basePage";

class BuyingShirtPage extends BasePage {
  static get selectProduct(){
    return cy.get("div[class='inventory_item_name']").eq(0);
  }
  static get addToCart(){
      return cy.get("button[class='btn btn_primary btn_small btn_inventory']");
  }
}

export default BuyingShirtPage;