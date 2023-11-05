export class registerPage {

    weblocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        eMail: '#input-email',
        telephonNo: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        privacyPolicyCheckBox: 'input[ type="checkbox"]',
        submitButton: '.btn.btn-primary'
    }

    openURL() {
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName) {
        cy.get(this.weblocators.firstName).type(FName)
    }
    enterLastName(LName) {
        cy.get(this.weblocators.lastName).type(LName)
    }
    entereMail(eMail) {
        cy.get(this.weblocators.eMail).type(eMail)
    }
    enterTelephonNo(phoneNo) {
        cy.get(this.weblocators.telephonNo).type(phoneNo)
    }
    enterPassword(pass) {
        cy.get(this.weblocators.password).type(pass)
    }
    enterPasswordConfirm(passConfirm) {
        cy.get(this.weblocators.passwordConfirm).type(passConfirm)
    }
    privacyPolicyCheckBox() {
        cy.get(this.weblocators.privacyPolicyCheckBox).check()
    }
    submitButton() {
        cy.get(this.weblocators.submitButton).click()
    }
}