import BasePage from "./basePage";

class WrongUserPassword extends BasePage {
  static get userName() {
    return cy.get("[id='user-name']");
  }
  static get password(){
    return cy.get("[id='password']");
  }
  static get loginButton(){
    return cy.get("[id='login-button']");
  }
  static get validation(){
    return cy.get("h3[data-test='error']");
  }
}

export default WrongUserPassword;