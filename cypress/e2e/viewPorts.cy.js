

describe.skip('Test view ports', () => {

  it('open viewport', () => {

    cy.visit("https://naveenautomationlabs.com/opencart/")
    cy.contains('Software').click();
    cy.contains('There are no products to list in this category.').should("be.visible")
    cy.go("back");
    cy.go("forward")
    cy.go(-1)
    cy.go(1)

  })
})

describe('test for dropdown', () => {

  it('Handle dropdown with select', () => {

    cy.visit("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    cy.get('#select-demo').select('Wednesday');
    cy.get('#select-demo option:selected').should('have.text', 'Wednesday')
    cy.get('#multi-select').select(['California', 'Florida', 'Ohio'])


  })
})

  describe('Smart search dropdown', ()=>{

    it("smart search", ()=> {
    

    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('iphone')
    cy.get('.two-pane-results-container').find('>div').contains('iphone 13 case').click();

  })
    
})
describe('Write to a file', ()=>{

  it("write to file", ()=> {
  

  cy.writeFile("firstFile.txt", "Cypress test")
  cy.writeFile("firstFile.txt", "add data" , {flag: "a+"})

  cy.writeFile('cypress/fixtures/test1.json', {data1: 'Test', data2: 'Test1'})
})

it("read file", ()=> {
  cy.readFile('firstFile.txt').then((data)=> {
    cy.log("print" +data)

  })

})
  
})

describe('shadow DOM elements', ()=>{

  it("shadow dom elemets handling", ()=> {

    cy.visit('https://selectorshub.com/xpath-practice-page/');

    // cy.get("#userName")
    // .shadow()
    // .find("#app2")
    // .shadow()
   cy.get("#pizza")
    .type("i want pizza");

  
})
})  
describe('handle multiple tabs', ()=>{

  beforeEach(function()
  {
    cy.visit('https://selectorshub.com/xpath-practice-page/');
  })
  it("handle multi-tab 1", ()=> {

    cy.contains('User Role').invoke('removeAttr','target').click()
  
})
it("handle multi-tab 2", ()=> {

  cy.contains('Course Link').invoke('attr','target','_self').click()

})  
})

describe.only('use fixtures', ()=>{

  before(()=>{
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
  })
it('Login user', ()=>{
  cy.fixture("login").then((data)=>{
    
    cy.get('#input-email').type(data.userName)
    cy.get('#input-password').type(data.password)

  })

  cy.get('input[type="submit"]').click()

})

})
