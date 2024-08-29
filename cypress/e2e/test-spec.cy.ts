describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.fixture("example.json").then((example) => {
      expect(example.email).to.be.eq("1ashwinjain@gmail.com"); // checking equality
      expect(example.email).to.not.be.eq("ashwinjain1@gmail.com"); // ensuring not inequality
    });
  });
});
