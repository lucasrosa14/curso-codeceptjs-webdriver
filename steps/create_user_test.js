
var faker = require('faker');

const {I, home_page, login_page, create_user_page, my_account_page, login} = inject()

Feature('Create User');

// Scenario('Login with success', async () => {
//     await login('user')
// })

Scenario('Create New User',  () => {

    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    console.log(`${firstName} ${lastName}`)

    I.amOnPage('/')

    //home
    home_page.accessLoginPage()

    //login
    login_page.submitCreateNewAccount(firstName, faker.internet.email())
    

    // create user
    create_user_page.fillFieldsCreateNewAccount(firstName, lastName)
    create_user_page.createUser()    

    // my account
    my_account_page.validateUserLogged()
    


});