import { Homepage,  productListingPage, cart, login, checkout,addCard } from '../support/page_locators.js'
//Accessibility Check
/*Cypress.Commands.add('injectAxe', () => {
  cy.window({ log: false }).then(window => {
    const axe = require('axe-core')
    window.eval(axe.source)
  })
})

Cypress.Commands.add('checkA11y', () => {
  cy.window({ log: false })
    .then(win => {
      return win.axe.run(win.document, {
        rules: {
          'color-contrast': { enabled: false },
        },
        runOnly: {
          type: 'tag',
          values: ['wcag2a'],
        },
      })
    })
    .then(({ violations }) => {
      if (violations.length) {
        cy.wrap(violations, { log: false }).each(v => {
          Cypress.log({
            name: 'a11y error!',
            consoleProps: () => v,
            message: `${v.id} on ${v.nodes.length} Node${
              v.nodes.length === 1 ? '' : 's'
            }`,
          })
        })
      }
      return cy.wrap(violations, { log: false })
    })
    .then(violations => {
      assert.equal(
        violations.length,
        0,
        `${violations.length} accessibility violation${
          violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
      )
    })
})*/

//Custom comamnds
Cypress.Commands.add('addToCart', () => {          
    cy.get(Homepage.categories).contains('Best Sellers').click()        
    cy.get(productListingPage.seeMoreLink).contains('Electronics').click()        
    cy.get(productListingPage.productLink).first().click()       
    cy.get(productListingPage.addToCart).click()       
    cy.get(productListingPage.viewCart).first().click()  
    
  })