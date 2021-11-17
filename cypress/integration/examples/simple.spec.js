describe('Browser Actions', () => {
  it('should load correct url', () => {
    cy.visit('https://example.cypress.io', { timeout: 10000 })
  })

  it('should check correct url', () => {
    cy.url().should('include', 'example')
  })

  it('should wait for 3 seconds', () => {
    cy.wait(3000)
  })

  it('should pause the execution', () => {
    cy.pause()
  })

  it('should check for correct element on the page', () => {
    cy.get('h1').should('be.visible')
  })
})
