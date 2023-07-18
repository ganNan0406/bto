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
//import { domain as Auth0Domain } from '../fixtures/auth_config.json'

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
