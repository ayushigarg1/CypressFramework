import { registerPage } from "../../pages/registerPage"
import data from "../../fixtures/register.json"

const registerPageObj = new registerPage()

describe('test automation', () => {

    it('register flow', () => {
        registerPageObj.openURL()
        registerPageObj.enterFirstName(data.firstName);
        registerPageObj.enterLastName(data.lastName);
        registerPageObj.entereMail(data.email);
        registerPageObj.enterTelephonNo(data.telephoneNo);
        registerPageObj.enterPassword(data.password);
        registerPageObj.enterPasswordConfirm(data.confirmPassword);
        registerPageObj.privacyPolicyCheckBox();
        registerPageObj.submitButton();
    })
})
