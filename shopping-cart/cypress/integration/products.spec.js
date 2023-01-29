describe("Product lists", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add product to cart", () => {
    cy.get('.MuiButtonBase-root')
      .first()
      .click();
    cy.wait(300);

    cy.visit("/cart");

    cy.contains(".CartPage_title___QQIC", "1-800-Flowers.com");
  });

  it("should delete product from cart", () => {
    cy.get('.MuiButtonBase-root')
      .first().click();
    cy.wait(300);

    cy.visit("/cart");

    cy.contains(".CartPage_title___QQIC", "1-800-Flowers.com");
    cy.contains("Delete").click();
    cy.contains("Your cart is empty").should("exist");

  });

});