export const Homepage  = {
    mainNav: "div#nav-main", 
    categories: "div[id*=shop-container] a",
   
}

export const productListingPage = {
   seeMoreLink: "div[class*=homeListLink] a",
   productLink: "span[class*=list-item] div",
   ProductTitle: "span[id=productTitle]",
   addToCart: "input[id=add-to-cart-button]",
viewCart: "span[id*=view-cart]"

}

export const cart = {
    CartProductlink: "span[class*=list-item] a [class*=product]",
    proceedToCheckout: "input[name=proceedToCheckout]",
   /* addToCart: function() {          
        cy.get(Homepage.categories).contains('Best Sellers').click()        
        cy.get(productListingPage.seeMoreLink).contains('Electronics').click()        
        cy.get(productListingPage.productLink).first().click()       
        cy.get(productListingPage.addToCart).click()       
        cy.get(productListingPage.viewCart).first().click()         
      },*/
}
export const login = {
    username: "input[type=email]",
    continue: "input[id=continue]",
    password: "input[type=password]",
    signIn: "input[id=signInSubmit]"
}

export const checkout = {
    shipToButton: "div[class*=ship-to-this-address]",
    submit: "input[type=submit]", 
    paymentOptions: "div[class*=add-payment]"
}

export const addCard = {
    nameOnCard: "input[name*=accountHolderName]",
    cardNumber: "input[name*=addCreditCardNumber]",
    expiry: "span[role=button]",
    dropdownOptions:"ul[role=listbox]"
    
}
