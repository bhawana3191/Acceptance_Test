import { Homepage,  productListingPage, cart, login, checkout,addCard } from '../support/page_locators.js'
describe('Checkout', function() {
    beforeEach(() => {
      cy.visit('/')
      cy.clearCookies()
      cy.reload()
      cy.fixture('TestData').then(function(data){
          this.data=data
      })
      cy.addToCart()
    })
  
    it('allow user to buy the product', function() {
        cy.get(cart.proceedToCheckout).should('be.visible')
        cy.get(cart.proceedToCheckout).click()
        cy.get(login.username).should('be.visible')       
        cy.get(login.username).type(this.data.email)
        cy.get(login.continue).should('be.visible')
        cy.get(login.continue).click()
        cy.get(login.password).should('be.visible')
        cy.get(login.password).type(this.data.password)
        cy.get(login.signIn).click()
        cy.get(checkout.shipToButton).should('be.visible')
        cy.get(checkout.shipToButton).first().click()
        cy.get(checkout.submit).should('be.visible')
        cy.get(checkout.submit).first().click()
        cy.get(checkout.paymentOptions).should('be.visible')
        cy.get(checkout.paymentOptions).within (() => {
            cy.get('a').should('have.attr', 'href')
            cy.get('a').first().click()
        })
        cy.get(addCard.nameOnCard).should('be.visible')
        cy.get(addCard.nameOnCard).type(this.data.nameOnCard)
        cy.get(addCard.cardNumber).should('be.visible')
        cy.get(addCard.cardNumber).type(this.data.cardNumber)
        cy.get(addCard.expiry).should('be.visible')
        cy.get(addCard.expiry).should('be.visible').first().click()
        cy.get(addCard.dropdownOptions).contains('06').click()
        cy.get(addCard.expiry).eq(1).click()
        cy.get(addCard.dropdownOptions).contains('2025').click()    
        cy.get(checkout.submit).should('be.visible')    
    })
})