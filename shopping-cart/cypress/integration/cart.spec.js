describe("Cart - ", () => {
  beforeEach(() => {
    let mockData = [{
      "productId": 5, "productName": "Amazon US", "img": "https://cdn.reloadly.com/giftcards/fbef9b57-e0b0-4ead-aee3-fdc2bc80e2db.png", "quantity": 1
    }];
    localStorage.setItem("cart", JSON.stringify(mockData));
    cy.visit("/cart");
  });

  it("should view product", () => {
    cy.contains(".CartPage_title___QQIC", "Amazon US");
  });

  it("should not view product if cart is empty", () => {
    localStorage.setItem("cart", JSON.stringify([]));
    cy.contains("Your cart is empty").should("exist");
  });

  it("should increment product quantity", () => {
    cy.get(".CartPage_body__9xgUX")
      .contains("Amazon US")
      .get(".MuiButtonGroup-root > :nth-child(1)")
      .should('be.visible')
      .click()
      .get(".MuiButton-text")
      .should('have.text', '2');
  });

  it("should decrement product quantity", () => {
    cy.get(".CartPage_body__9xgUX")
      .contains("Amazon US")
      .get(".MuiButtonGroup-root > :nth-child(1)")
      .should('be.visible')
      .click()
      .click()
      .get(".MuiButtonGroup-root > :nth-child(3)")
      .should('be.visible')
      .click()
      .get(".MuiButton-text")
      .should('have.text', '2');
  });


  it("should remove the item on decrement, if product quantity is equal to one", () => {
    cy.get(".CartPage_body__9xgUX")
      .contains("Amazon US")
      .get(".MuiButtonGroup-root > :nth-child(3)")
      .should('be.visible')
      .click();
    cy.contains("Your cart is empty").should("exist");
  });


});