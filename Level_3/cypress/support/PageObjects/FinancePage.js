import 'cypress-xpath';

class FinancePage {

  //Elements on the page

  get widgetConverter() {
    return cy.get('.widget-converter');
  }

  get buyCurrency() {
    return cy.get('#buy');
  }

  get amountInput() {
    return cy.get('#currency_amount');
  }

  get currencySelect() {
    return cy.get('[name="converter_currency"]');
  }

  get uahOutput() {
    return cy.xpath('//p[@id="UAH"]/input[@id="currency_exchange"]')
      .invoke('val')
      .then((value) => {
        let trimmedValue = value.replace(/\s/g, '')
        return trimmedValue
      });
  }

  get currencyRate() {
    return cy.xpath('//p[@id="UAH"]/input[@id="currency_rate"]').invoke('val');
  }

  // Actions on the page

  closePopUp() {

    cy.get('[data-nopop="true"]', { timeout: 5000 }).then(($popup) => {
      if ($popup.is(':visible')) {
        cy.wrap($popup).invoke('hide');
      }
    });
  }


  scrollToElement(element) {
    element.scrollIntoView();
  }

  selectOperation(element) {
    element.click();
  }

  inputSum(sum) {
    this.amountInput.clear().type(sum);
  }

  selectCurrency(currency) {
    this.currencySelect.select(currency);
  }

}

export default FinancePage;