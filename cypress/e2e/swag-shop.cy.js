import StandardFunctionPage from "../pageObjects/StandardFunctionPage";
import LockedUserPage from "../pageObjects/LockedUserPage";
import WrongUserPassword from "../pageObjects/WrongUserPassword";
import SortingItemsPage from "../pageObjects/SortingItemsPage";
import HomePageItemValidation from "../pageObjects/HomepageItemValidation";
import CartValidationPage from "../pageObjects/CartValidationPage";
import CartContentValidationPage from "../pageObjects/CartContentValidationPage";
import BuyingShirtPage from "../pageObjects/BuyingShirtPage";

context("Login: ", () => {
  beforeEach(() => {
    StandardFunctionPage.visit();
  });
  it("Locked user login", () => {
    LockedUserPage.userName.type("locked_out_user");
    LockedUserPage.password.type("password");
    LockedUserPage.loginButton.click();
    LockedUserPage.validation.should('contain.text', 'Epic sadface: Username and password do not match any user in this service' );
  });
  it("Wrong user password", () => {
    WrongUserPassword.userName.type("standard_user");
    WrongUserPassword.password.type("wrong password");
    WrongUserPassword.loginButton.click();
    WrongUserPassword.validation.should('contain.text', 'Epic sadface: Username and password do not match any user in this service' );
  });
});
context("Validating number of items: ", () => {
  beforeEach(() => {
    StandardFunctionPage.visit();
    StandardFunctionPage.userName.type("standard_user");
    StandardFunctionPage.password.type("secret_sauce");
    StandardFunctionPage.loginButton.click();
    });
    
  it("Validating that there are 6 products on homepage",() => {
    HomePageItemValidation.verifyNumberOfItems.should('have.length', 6)
  });
});
context("Sorting items: ", () => {
  beforeEach(() => {
    StandardFunctionPage.visit();
    StandardFunctionPage.userName.type("standard_user");
    StandardFunctionPage.password.type("secret_sauce");
    StandardFunctionPage.loginButton.click();
  });
  it("Sorting items - Price from high to low",() => {
    SortingItemsPage.selectionMenu.select('hilo');
    SortingItemsPage.firstItemPrice.eq(0).should('contain.text', '$49.99');
    SortingItemsPage.firstItemName.should('contain.text', 'Sauce Labs Fleece Jacket');
  });
  it("Sorting items - Price from low to high",() => {
    SortingItemsPage.selectionMenu.select('lohi');
    SortingItemsPage.firstItemPrice.eq(0).should('contain.text', '$7.99');
    SortingItemsPage.firstItemName.eq(0).should('contain.text', 'Sauce Labs Onesie');
  });
  it("Sorting items - Name from A to Z",()=>{
    SortingItemsPage.selectionMenu.eq(0).select('az');
    SortingItemsPage.firstItemName.eq(0).should('contain.text', 'Sauce Labs Backpack');
  });
  it("Sorting items - Name from Z to A",()=>{
    SortingItemsPage.selectionMenu.eq(0).select('za');
    SortingItemsPage.firstItemName.eq(0).should('contain.text', 'Test.allTheThings() T-Shirt (Red)');
  });
});

context("Validate shopping cart badge amount:", () => {
  beforeEach(() => {
    StandardFunctionPage.visit();
    StandardFunctionPage.userName.type("standard_user");
    StandardFunctionPage.password.type("secret_sauce");
    StandardFunctionPage.loginButton.click();
  });
  it("Adding one item in cart", () =>{
    CartValidationPage.boltT_Shirt.click();
    CartValidationPage.validation.should('contain.text', '1');
  });
  it("Adding 2 items in cart", () =>{
    CartValidationPage.boltT_Shirt.click();
    CartValidationPage.bikeLight.click();
    CartValidationPage.validation.should('contain.text', '2');
  });
});
context.only("Validating shoping cart content:", () => {
  beforeEach(() => {
    StandardFunctionPage.visit();
    StandardFunctionPage.userName.type("standard_user");
    StandardFunctionPage.password.type("secret_sauce");
    StandardFunctionPage.loginButton.click();
  });
  it("Adding one and verifying one item in cart", () =>{
    //CartContentValidationPage.selectProduct.click();
  });
});
context("Buying a shirt: ", () => {
    beforeEach(() => {
      StandardFunctionPage.visit();
      StandardFunctionPage.userName.type("standard_user");
      StandardFunctionPage.password.type("secret_sauce");
      StandardFunctionPage.loginButton.click();
    });
    it("Buying first product", () =>{
      BuyingShirtPage.selectProduct.click();
      //BuyingShirtPage.adToCart.click();
    });
  });