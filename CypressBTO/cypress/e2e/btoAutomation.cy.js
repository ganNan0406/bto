/// <reference types="Cypress"/>


describe('BTO Automation Exam', () => {
    // Run each for each test case
    beforeEach(() => {
        cy.visit('/register-c/get-started')       
    })

    // For unique email to avoid duplicate record
    const email = new Date().toISOString().replaceAll(':','') + '@yahoo.com'

    it.skip('Email Validation', () => {

        /** For above email and button */
        // Checks no value
        cy.get('#btn__submit').click()
        cy.get('#mat-error-0').contains('Email address is required.')
        
        // Checks for spaces only
        cy.get('[name="input__email"]').first().type(' ')
        cy.get('#btn__submit').click()
        cy.get('#mat-error-0').contains('Email address is required.')

        /** For below email and button */
        // Checks no value
        //cy.get('.form__container').get('#btn__submit').click()
        //cy.get('.form__container').get('#mat-error-0').last().contains('Email address is required.')
        
        // Checks for spaces only
        //cy.get('[name="input__email"]').last().type(' ')
        //cy.get('.form__container').get('#btn__submit').last().click()
        //cy.get('.form__container').get('#mat-error-0').last().contains('Email address is required.')

    })

    it.skip('Click "Get Started" button, Validate Password', () => {

        // Input correct email address
        cy.get('[name="input__email"]').first().type('test@yahoo.com')
        cy.get('#btn__submit').click()

        // Checks for the correct url for password
        cy.url().should('include','/register-c/password')

        // Invalid Password - Null
        cy.get('#btn__submit').click()
        cy.get('#mat-error-0').contains('Password is required.')
        cy.get('#btn__submit').should('have.disabled','true')

        // Invalid Password - Spaces
        cy.get('[name="input__password"]').type(' ')
        cy.validatePasswordHint(5, 'valid')

        // Invalid Password - Less than 8 chars
        cy.get('[name="input__password"]').clear().type('IFIgn9!')
        cy.validatePasswordHint(1, 'valid', 'Pass_EightChars')

        // Invalid Password - No Numeric
        cy.get('[name="input__password"]').clear().type('WIFIgnv!')
        cy.validatePasswordHint(1, 'valid', 'Pass_Numeric')

        // Invalid Password - No Lowercase
        cy.get('[name="input__password"]').clear().type('WIFI123!')
        cy.validatePasswordHint(1, 'valid', 'Pass_Lowercase')

        // Invalid Password - No Special
        cy.get('[name="input__password"]').clear().type('WIFIgn9v')
        cy.validatePasswordHint(1, 'valid', 'Pass_Special')

        // Invalid Password - No Uppercase
        cy.get('[name="input__password"]').clear().type('wifign9!')
        cy.validatePasswordHint(1, 'valid', 'Pass_Uppercase')

    })

    it.skip('Click "Looks Good" button, Validate Name', () => {

        // Input correct email address
        cy.get('[name="input__email"]').first().type('test@yahoo.com')
        cy.get('#btn__submit').click()

        // Checks for the correct url for password
        cy.url().should('include','/register-c/password')

        // Input valid password
        cy.get('[name="input__password"]').type('WIFIgn9!')
        cy.get('#btn__submit').click()

        // Checks for the correct url for names
        cy.url().should('include','/register-c/names-b')

        // Validate checkbox is checked in default
        cy.get('#consent__checkbox-input').should('be.checked')

        // Invalid Names - Null
        cy.get('#btn__submit').click()
        cy.get('#mat-error-1').should('exist')
        cy.get('#mat-error-2').should('exist')

        // Invalid First Name - Spaces
        cy.get('[name="input__fn"]').type('   ')
        cy.get('[name="input__ln"]').type('   ')
        cy.get('#btn__submit').click()
        cy.get('[role="alertdialog"').should('exist').contains('"FirstName" is not allowed to be empty').click()

        // Invalid First Name - Blank but focused, Less than 2 chars, with special char
        cy.get('[name="input__fn"]').clear().as('firstName')
        cy.get('#mat-error-3').should('exist')
            .contains('Provide us with your first name.').then(() => {
                cy.get('@firstName').type('M').as('firstName')
            })
        cy.get('#mat-error-3').should('exist')
            .contains('Input at least 2 characters.').then(() => {
                cy.get('@firstName').type('@')
            })
        cy.get('#mat-error-3').should('exist')
            .contains('Please enter a valid First Name.')
        
        // Invalid Last Name - Spaces
        cy.get('[name="input__fn"]').clear().type('Niño')
        cy.get('#btn__submit').click()
        cy.get('[role="alertdialog"').should('exist').contains('"LastName" is not allowed to be empty').click()

        // Invalid Last Name - Blank but focused, Less than 2 chars, with special char
        cy.get('[name="input__ln"]').clear().as('lastName')
        cy.get('#mat-error-4').should('exist')
            .contains('Provide us with your last name.').then(() => {
                cy.get('@lastName').type('M').as('lastName')
            })
        cy.get('#mat-error-4').should('exist')
            .contains('Input at least 2 characters.').then(() => {
                cy.get('@lastName').type('@')
            })
        cy.get('#mat-error-4').should('exist')
            .contains('Please enter a valid Last Name.')
        
    })

    it.skip('Duplicate Account', () => {

        // Input correct email address but a duplicate
        cy.get('[name="input__email"]').first().type('test@yahoo.com')
        cy.get('#btn__submit').click()

        // Checks for the correct url for password
        cy.url().should('include','/register-c/password')

        // Input valid password
        cy.get('[name="input__password"]').type('WIFIgn9!')
        cy.get('#btn__submit').click()

        // Checks for the correct url for names
        cy.url().should('include','/register-c/names-b')

        // Input valid names
        cy.get('[name="input__fn"]').clear().type('Maria')
        cy.get('[name="input__ln"]').clear().type('Niñalga')
        cy.get('#btn__submit').click()

        // Duplicate account - Email already exists
        cy.get('[role="alertdialog"').should('exist').contains('An account with this email address already exists').click()
       
    })

    it.skip('Validate Mobile', () => {

        // Input correct email address but a duplicate
        cy.get('[name="input__email"]').first().type('maria_makiling@yahoo.com')
        cy.get('#btn__submit').click()

        // Checks for the correct url for password
        cy.url().should('include','/register-c/password')

        // Input valid password
        cy.get('[name="input__password"]').type('WIFIgn9!')
        cy.get('#btn__submit').click()

        // Checks for the correct url for names
        cy.url().should('include','/register-c/names-b')

        // Input valid names
        cy.get('[name="input__fn"]').clear().type('Maria')
        cy.get('[name="input__ln"]').clear().type('Makiling')
        cy.get('#btn__submit').click()

        // Checks for the correct url for mobile
        cy.url().should('include','/register-c/mobile-verification-b')

        // Invalid Mobile - Null
        cy.get('#btn__submit').click()
        cy.get('#mat-error-3').should('exist').contains('Mobile number is required')
        cy.get('#btn__submit').should('have.disabled', 'true')

        // Invalid Mobile - Non-Numeric
        cy.get('[name="input__mobile"]').type('M')
        cy.get('#mat-error-3').should('exist').contains('Please enter a valid Mobile number')
        cy.get('#btn__submit').should('have.disabled', 'true')

        // Invalid Mobile - Incomplete Number
        cy.get('[name="input__mobile"]').clear().type('1')
        cy.get('#mat-error-3').should('exist').contains('Please enter a valid Mobile number')
        cy.get('#btn__submit').should('have.disabled', 'true')

        // Invalid Mobile - More than required number
        cy.get('[name="input__mobile"]').clear().type('123456789')
        cy.get('#mat-error-4').should('exist').contains('Please enter a valid Mobile number')
        cy.get('#btn__submit').should('have.disabled', 'true')

        // Choose a different country - Incomplete number
        cy.get('mat-select-trigger').click()
        cy.get('mat-option').contains('Canada').then(option => {

            cy.wrap(option).contains('Canada')
            option[0].click()
        })
        cy.get('[name="input__mobile"]').clear().type('123456789')
        cy.get('#mat-error-4').should('exist').contains('Please enter a valid Mobile number')
        cy.get('#btn__submit').should('have.disabled', 'true')

        // Valid Mobile Number
        cy.get('[name="input__mobile"]').clear().type('1234567890')
        cy.get('#mat-error-3').should('not.exist')
        cy.get('#mat-error-4').should('not.exist')
        cy.get('#btn__submit').click()

        // Resend timer triggered
        cy.get('#btn__submit').click()
        cy.get('.resend__code').find('.resend_timer')

        // Invalid One-Time Password - Null
        cy.get('#mat-error-5').should('exist').contains('One-Time Password (6-Digits) is required')

        
        // Invalid One-Time Password - Non-Numeric
        cy.get('[name="input__verification"]').type('A')
        cy.get('#mat-error-5').should('exist').contains('Please enter a valid one-time password.')

        // Invalid One-Time Password - Incomplete
        cy.get('[name="input__verification"]').clear().type('1')
        cy.get('#mat-error-5').should('exist').contains('Please enter a valid one-time password.')

    })

    it.skip('********Not Done Yet Click "Back" button for all pages', () => {

        // Input correct email address
        cy.get('[name="input__email"]').first().type('test@yahoo.com')
        cy.get('#btn__submit').click()

        // Checks for the correct url for password
        cy.url().should('include','/register-c/password')

        // Click "Back" button
        cy.get('#btn__back').click()

        // Checks for the correct url after clicking back button
        cy.url().should('include', '/register-c/get-started')
    })

    it.skip('Happy Flow: Consent is Yes, Mobile Country is Default', () => {

        // Input correct email address but a duplicate
        cy.get('[name="input__email"]').first().type(email)
        cy.get('#btn__submit').click()

        // Checks for the correct url for password
        cy.url().should('include','/register-c/password')

        // Input valid password
        cy.get('[name="input__password"]').type('WIFIgn9!')
        cy.get('#btn__submit').click()

        // Checks for the correct url for names
        cy.url().should('include','/register-c/names-b')

        // Input valid names
        cy.get('[name="input__fn"]').clear().type('Maria')
        cy.get('[name="input__ln"]').clear().type('Makiling')
        cy.get('#btn__submit').click()

        // Checks for the correct url for mobile
        cy.url().should('include','/register-c/mobile-verification-b')

        // Input valid Mobile
        cy.get('[name="input__mobile"]').type('12345678')

        // Resend timer triggered
        cy.get('#btn__submit').click()
        cy.get('.resend__code').find('.resend_timer')

        // Input valid One-Time Password
        cy.get('[name="input__verification"]').type('123456')
        cy.get('#btn__submit').click()
        
        // Checks for the correct url for onboarding
        cy.url().should('include','/confirm')
        cy.wait(20000)
        cy.url().should('include','/onboarding-c/welcome/')

    })

    it.skip('Happy Flow: Consent is No, Mobile Country is not Default', () => {
        
        // Input correct email address but a duplicate
        cy.get('[name="input__email"]').first().type(email)
        cy.get('#btn__submit').click()

        // Checks for the correct url for password
        cy.url().should('include','/register-c/password')

        // Input valid password
        cy.get('[name="input__password"]').type('WIFIgn9!')
        cy.get('#btn__submit').click()

        // Checks for the correct url for names
        cy.url().should('include','/register-c/names-b')

        // Input valid names
        cy.get('[name="input__fn"]').clear().type('Maria')
        cy.get('[name="input__ln"]').clear().type('Makiling')

        // Uncheck consent
        cy.get('.mat-checkbox-layout').get('#consent__checkbox-input').uncheck({force:true})
        cy.get
        cy.get('#btn__submit').click()

        // Checks for the correct url for mobile
        cy.url().should('include','/register-c/mobile-verification-b')

        // Choose a different country - Input valid number
        cy.get('mat-select-trigger').click()
        cy.get('mat-option').contains('Canada').then(option => {

            cy.wrap(option).contains('Canada')
            option[0].click()
        })
        cy.get('[name="input__mobile"]').clear().type('1234567890')

        // Resend timer triggered
        cy.get('#btn__submit').click()
        cy.get('.resend__code').find('.resend_timer')

        // Input valid One-Time Password
        cy.get('[name="input__verification"]').type('123456')
        cy.intercept('')
        cy.get('#btn__submit').click()

        // Checks for the correct url for onboarding
        cy.url().should('include','/confirm')
        cy.wait(20000)
        cy.url().should('include','/onboarding-c/welcome/')

    })
})