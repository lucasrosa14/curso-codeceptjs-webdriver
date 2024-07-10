const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// const {
//   devices
// } = require('playwright');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const server = require('./server/server.js')

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'Codeceptjs_Webdriver',
  //tests: './steps/create_user_test.js',
  //tests: './steps/login_test.js',
  tests: './steps/upload_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://automationexercise.com/',
     // url: 'http://automationpratice.com.br/',  //usado para o teste de login
      browser: 'chrome',
      waitForTimeout: 5000
    }
    
    // playwright: {
    //   url: 'https://automationexercise.com/',
    //   // url: 'http://automationpratice.com.br',
    //   browser: 'chromium',
    //   show: true,
    //}
  },
  include: {
    "I": "./steps_file.js",
    "home_page": "./pages/home_page.js",
    "login_page": "./pages/login_page.js",
    "create_user_page": "./pages/create_user_page.js",
    "my_account_page": "./pages/my_account_page.js"
  },
  bootstrap: async () => {
    await server.start()
  },
  teardown: async () => {
    await server.stop()
  },
  mocha: {},
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    mocha: {
      reporterOptions: {  
      }
    },
    allure: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    }
  },
  autoLogin: {
    enabled: true,
    saveToFile: true,
    inject: 'login',
    users: {
      user: {
        // loginAdmin function is defined in `steps_file.js`
        login: (I) => {
          I.amOnPage('/')
          I.wait(15)
          I.click('Signup / Login')
          I.waitForElement('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)', 10)
          I.fillField('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)', 'lucas.trier91@gmail.com')
          I.fillField('password', secret('123456'))
          I.click('Login')
        },
        // if we see `Admin` on page, we assume we are logged in
        check: (I) => {
           I.amOnPage('/');
           I.see('Lucas');
        }
      }
    }
  }

}