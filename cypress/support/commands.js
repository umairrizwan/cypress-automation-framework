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
//
// -- This is a parent command --
 Cypress.Commands.add('SearchForFirstFlight', () => { 
    cy.get('.sc-hJJQhR.gmlGor .sc-ksXhwv.dNiiLp .sc-kHNMoK.frCpEj').each(($el, index, $list) => {

        const fareRate = $el.find('.sc-hzMMCg.hvabmP').text();

        if (fareRate.includes('€')) {
            cy.wrap($el).find('div').eq(index).click(); 
            
            //Asserting html css
            cy.get('.sc-hzMMCg.hvabmP').eq(index).should('have.css','font-weight').and('eq', '400');     
            cy.get('.sc-hzMMCg.hvabmP').eq(index).should('have.css','font-size').and('eq', '24px'); 
            
            return false;
        }

    })
  })
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