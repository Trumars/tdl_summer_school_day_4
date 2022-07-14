import BasePage from "./basePage";

class CartValidationPage
 extends BasePage {
  static get validation(){
    return cy.get("span[class='shopping_cart_badge']");
  }
  static get boltT_Shirt(){
    return cy.get("button[id='add-to-cart-sauce-labs-bolt-t-shirt']");
  }
  static get bikeLight(){
    return cy.get("button[id='add-to-cart-sauce-labs-bike-light']");
  }
}

export default CartValidationPage;