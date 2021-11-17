describe('Books', () => {
  it('should loads books websites', () => {
    cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
    cy.url().should('include', 'index.html')
    cy.log('This is a log message')
  })

  it('should click on Poetry category', () => {
    cy.get('a').contains('Poetry').click()
    cy.get('h1').contains('Poetry')
  })

  it('should click Olio book', () => {
      cy.get('h3').contains('Olio').click()
      cy.get('h1').contains('Olio')
  })

  it('should have the correct price', () => {
    cy.get('.price_color').contains('£23.88')
  })
})
