describe('Min repro steps', () => {
  beforeEach(() => {
    cy.intercept('GET', '/foo', 'hi').as('foo');
  });

  for (let i = 0; i < 10; i++) {
    it(`test ${i}`, () => {
      cy.visit('/');
    });
  }
});
