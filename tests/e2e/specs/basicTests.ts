describe('Basic tests', () => {
  it('Should be able to access the home page', () => {
    cy.visit('/')
    cy.contains('h2', 'Transações')
  })

  it('Should have mounted the transaction table on loading', () => {
    cy.get('.transaction-row').should('have.length', 21)
  })

  it('Should be able to filter by title', () => {
    cy.get('.filter-by-title').type('resgate')
    cy.get('.transaction-row').should('have.length', 13)
    cy.get('.filter-by-title').clear()
    cy.get('.transaction-row').should('have.length', 21)
  })

  it('Should be able to filer by status', () => {
    cy.get('select').select('Processada')
    cy.get('.transaction-row').should('have.length', 7)
  })

  it('Should open the detail modal on click', () => {
    cy.get('.transaction-row').eq(0).click()
    cy.get('.modal-backdrop-container').should('be.visible')
    cy.get('.header').should('have.text', 'Depósito')
  });

  it('Should be able to close the modal', () => {
    cy.get('#close-button').click()
    cy.get('.modal-backdrop-container').should('not.be.visible')
  })
})
