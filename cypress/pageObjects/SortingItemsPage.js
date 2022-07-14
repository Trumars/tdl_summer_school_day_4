import BasePage from "./basePage";

class SortingItemsPage extends BasePage {
  static get selectionMenu(){
    return cy.get('select');
  }
  static get firstItemPrice(){
    return cy.get("div[class='inventory_item_price']");
  }
  static get firstItemName(){
    return cy.get("div[class='inventory_item_name']");
  }
}

export default SortingItemsPage;

/* I left this code as a example. This shows that I can select particular element in already inside of object.

  static get sortButtonLowToHigh(){
    return cy.get('select').select('lohi');
  }

*/