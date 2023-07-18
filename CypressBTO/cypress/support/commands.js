// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

/**
 * validatePasswordHint validates password hint
 * for an expected number disabled hint and
 * selector.
 */
Cypress.Commands.add("validatePasswordHint", (expNoOfDisabledHint,
    selector, fieldName) => {

        if(!fieldName) {

            cy.get('#mat-hint-2 span').should('have.length',5).then(($elements) => {
                const filtered = Cypress._.reject($elements, (el) => {
                    return el.classList.contains(selector)
                })
                return filtered
            }).should('have.length', expNoOfDisabledHint)
        } else {

            cy.get('#mat-hint-2 span').should('have.length',5).then(($elements) => {
                const filtered = Cypress._.reject($elements, (el) => {
                    return el.classList.contains(selector)
                })
                return filtered
            }).should('have.length', expNoOfDisabledHint).should('have.id', fieldName)
        }
        cy.get('#btn__submit').should('have.disabled', 'true')
    })

/** 
 * getBySel yields elements with a data-test attribute 
 * that match a specified selector. 
 * */ 
Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get('[data-test=${selector}]', ...args)
})


/** 
 * getBySelLike yields elements with a data-test attribute 
 * that contains a specified selector. 
 * */
Cypress.Commands.add("getBySelLike", (selector, ...args) => {
    return cy.get('[data-test*=${selector}]', ...args)
})
  
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })