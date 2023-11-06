// Spec

beforeEach(function()
  {
    cy.log("Before each");
  })
before(function()
{
  cy.log("Just before")

})

describe('template spec 1', () => {
  
  it('test case 1', () => {
    cy.log('tc 1')
  });

  
  it('test case 2',()=>{
    cy.log('tc 2')

  });
});

describe('template spec 2', () => {
  it('test case 1', () => {
    cy.log('tc  1')
  });

  it('test case 2',()=>{
    cy.log('tc 2')


  });
  afterEach(function()
  {
    cy.log("After each")
  })
});


