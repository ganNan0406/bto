# bto
BTO Automation Exam

Project Name: CypressBTO

**CODE CHANGES**

Spec change: 
  1. cypress/e2e/btoRegistrationNormal.cy.js - New - Test file which contains the registration test cases. 

Configuration changes:
  1. cypress/cypress.config.js - Updated - Added configurations for e2e
  2. cypress/support/constants.js - New - Created as custom constants repository
  3. cypress/support/e2e.js - Updated - Added import for constants.js
  4. cypress/support/commands.js - Updated - Added cypress command validatePasswordHint to be used in spec file
