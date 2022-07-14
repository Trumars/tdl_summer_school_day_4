import BasePage from "./basePage";

class CartContentValidationPage
 extends BasePage {
  get selectProduct(){
    return cy.get("div[class='inventory_item_name']");
  }
}

export default CartContentValidationPage;