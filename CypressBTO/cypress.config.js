const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://b2c.btoprod.com',
    requestTimeout: 10000,
    experimentalModifyObstructiveThirdPartyCode: true
    },
});
