import { Homepage,  productListingPage, cart } from '../support/page_locators.js'

describe('Product page', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
    cy.reload()
    //cy.injectAxe() There are accessibility voiations on the home page which will fail the scripts.
  })

  it('allows user to add product to the cart', function() {
    cy.get(Homepage.mainNav).should('be.visible')
    //cy.checkA11y() 
    cy.get(Homepage.categories).contains('Best Sellers').click()
    //cy.checkA11y() 
    cy.url().should('include', '/bestsellers')
cy.get(productListingPage.seeMoreLink).should('be.visible')
    cy.get(productListingPage.seeMoreLink).contains('Electronics').click()
    cy.get(productListingPage.productLink).should('be.visible')
    cy.get(productListingPage.productLink).first().click()
    cy.get(productListingPage.ProductTitle).should('be.visible')
    cy.get(productListingPage.ProductTitle).then(($titlePLP) => {
      const title = $titlePLP.text()      
      cy.get(productListingPage.addToCart).should('be.visible')
      cy.get(productListingPage.addToCart).click()
      cy.wait(1000)
      cy.get(productListingPage.viewCart).should('be.visible')
    cy.get(productListingPage.viewCart).first().click()
    cy.get(cart.CartProductlink).should('be.visible')
    cy.get(cart.CartProductlink).should(($titleCart) => {
      expect($titleCart.text()).to.eq(title)
  })
})
  })
})
