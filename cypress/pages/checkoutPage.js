export class checkoutPage {

    weblocators = {
        searchTextBox: '.form-control.input-lg',
        clickSearch: '.btn.btn-default.btn-lg',
        selectProduct: 'img[title="iMac"]',
        addtocart: 'Add to Cart',
        successMsg: 'div.alert.alert-success.alert-dismissible'

    }

    searchTextBox(product) {

        cy.get(this.weblocators.searchTextBox).type(product)
        cy.get(this.weblocators.clickSearch).click()
    }

    addToCart() {

        cy.contains(this.weblocators.addtocart).first().click()
    }
    verifySuccessMessage() {
        return cy.get(this.weblocators.successMsg)
    }







}