const { I } = inject();

module.exports = {

  fields: {
    nameRegister: 'Name',
    emailAddressRegister: '#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)'

  },

  button: {
    createAccountButton: 'Signup'
  }, 

  messages: {

  },
  
  submitCreateNewAccount(name, email){
    I.fillField(this.fields.nameRegister, name)
    I.fillField(this.fields.emailAddressRegister, email)
    I.click(this.button.createAccountButton)
  }
  
}
