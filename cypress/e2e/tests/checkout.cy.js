import testData from "../../fixtures/checkout.json"
import { checkoutPage } from "../../pages/checkoutPage"

const checkoutObj = new checkoutPage()

describe("Login into the application", () => {

    before(() => {

        cy.loginTest(testData.login.email, testData.login.password)

    })

    it("add and checkout product", () => {

        checkoutObj.searchTextBox(testData.product.productName) 
        checkoutObj.addToCart()
        checkoutObj.verifySuccessMessage().should('contain', testData.message.successMessage)
        
    })



})

