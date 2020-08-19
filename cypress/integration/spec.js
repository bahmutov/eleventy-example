/// <reference types="cypress" />
describe("11ty", () => {
  it("navigates", () => {
    // find more Cypress commands at
    // https://on.cypress.io/api
    cy.visit("/");
    cy.contains("Hi there");
    cy.contains("a", "the README").click();
    cy.location("pathname").should("match", /\/README\/$/);
    cy.go("back");
    cy.contains("Hi there"); // back on the index page
  });
});
