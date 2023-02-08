const { I } = inject
const cpfName = require('../utils/cpf_name');

Feature('login');

BeforeSuite(({I}) => {
   console.log(cpfName.cpfName())
   console.log(cpfName.soma(5,3))
})

Before(({I})  => {
    I.amOnPage('/')
})

After(({I})  => {
    console.log('After')
})

AfterSuite(({I})  => {
    console.log('Depois de tudo')
})
 

Scenario('Validate Empty E-mail On Create Account',   ({ I }) => {
    I.amOnPage('/')
    I.click('Login')
    I.waitForElement('#btnLogin')
    I.click('#btnLogin')
    I.see('E-mail inválido')

});

Scenario('Validate Empty E-mail On Create Account 2',   ({ I }) => {
    I.amOnPage('/')
    I.click('Login')
});

Scenario('Validate Empty E-mail On Create Account 3',   ({ I }) => {
    I.amOnPage('/')
    I.click('Login')
});