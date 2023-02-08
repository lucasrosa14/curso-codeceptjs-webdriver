const { I } = inject();

module.exports = {

  fields: {

  },

  button: {
    loginButton: 'Signup / Login'
  }, 

  messages: {

  },
  
  accessLoginPage() {
    I.click(this.button.loginButton)
  }
}
