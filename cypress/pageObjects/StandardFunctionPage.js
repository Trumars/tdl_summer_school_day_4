import BasePage from "./basePage";

class StandardFunctionPage extends BasePage {
  static get url() {
    return "www.saucedemo.com";
  }
  static get userName() {
    return cy.get("[id='user-name']");
  }
  static get password(){
    return cy.get("[id='password']");
  }
  static get loginButton(){
    return cy.get("[id='login-button']");
  }
}

export default StandardFunctionPage