var validacao = require('assert');

const { I } = inject();

module.exports = {

  fields: {
    name: '#name',
    firstName: '#first_name',
    lastName: '#last_name',
    password: '#password',
    days: '#days',
    months: '#months',
    years: '#years',
    address: '#address1',
    state: '#state',
    city: '#city',
    zipCode: '#zipcode',
    mobileNumber: '#mobile_number',
    
    
  },

  button: {
    male: '#id_gender1',
    country: '#country',
    createAccount: 'Create Account',
    continue: 'Continue'

  }, 

  messages: {
    successful: 'Congratulations! Your new account has been successfully created!'
  },

  labels: {
    createAnAccount: '#form > div > div > div > div > h2 > b'
  }, 
  
  fillFieldsCreateNewAccount(firstName, lastName){
/*
    var pageTitle =  I.grabTextFrom(this.labels.createAnAccount)
    I.wait(3)
    validacao.equal(pageTitle, 'Enter Account Information')
*/
    I.checkOption(this.button.male)
    I.fillField(this.fields.name, firstName)
    I.fillField(this.fields.password, secret('123456'))

    I.selectOption(this.fields.days, '14')
    I.selectOption(this.fields.months, 'June')
    I.selectOption(this.fields.years, '1991')

    I.fillField(this.fields.firstName, firstName)
    I.fillField(this.fields.lastName, lastName)
    I.fillField(this.fields.address, 'broadway st')
    I.selectOption(this.button.country, 'United States')
    I.fillField(this.fields.state, 'New York')
    I.fillField(this.fields.city, 'New York')
    I.fillField(this.fields.zipCode, '10014')
    I.fillField(this.fields.mobileNumber, '646-55669988')

  },

  createUser(){
    I.click(this.button.createAccount)
    I.see(this.messages.successful)
    I.click(this.button.continue)
  }
  
  
}
