const { I } = inject();

module.exports = {

  messages: {
    loggedAs: 'Logged in as ',
   // userName: 'firstName'
  },

  validateUserLogged(){
    I.see(this.messages.loggedAs)
  }
  
}
