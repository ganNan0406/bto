/// <reference types="Cypress" />

/*
describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    // original content
    cy.visit('https://example.cypress.io')

    // search for DOM with "type" word then click the link
    cy.contains('type').click()

    // Should be on a new URL which includes
    // '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    // Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
    
    // using custom command in getting the element by data-test attribute.
    //cy.getBySel()
  })
   
  //it('Does not do much!', () => {
    // for fail test
    //expect(true).to.equal(false)
    
    // for pass test
    //expect(true).to.equal(true)
  //})
  
})
*/

describe('BTO Test', () => {
  it('Visits BTO website', () => {
    cy.visit('https://b2c.btoprod.com/')

    cy.get('[translate="fo.lbl.createaccountforfree"]').click()

    // Check if it went to register page
    cy.url().should('include','/register-c/get-started')
    // Check the first email input
    cy.get('#input__email').first().type('abc')
    cy.get('#btn_submit').first().focus()
  })
})

