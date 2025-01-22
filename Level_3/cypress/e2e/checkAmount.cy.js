import FinancePage from '../support/pageObjects/FinancePage'; 

describe('Finance Main Page Testing', () => {
  let financePage = new FinancePage();
  let enteredSum = 67;
  let currency = "EUR";

  beforeEach(() => {

    cy.visit('https://finance.i.ua/')
    //financePage.closePopUp()

  });

  it('Correct amount Test', () => {

    financePage.scrollToElement(financePage.widgetConverter);
    financePage.selectOperation(financePage.buyCurrency);
    financePage.inputSum(enteredSum);
    financePage.selectCurrency(currency);
    financePage.currencyRate.then((rateSum) => {
      financePage.uahOutput.should('equal', (rateSum * enteredSum).toFixed(2));
    });

  })
})