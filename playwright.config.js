const { defineConfig, devices } = require("@playwright/test");
const { trace } = require("node:console");


require("dotenv").config();

module.exports = defineConfig({
  testDir: "./tests",
    timeout: 60000,

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: "on",
    trace: "on-first-retry",
  },

  reporter: "html",

  projects: [
    {
name:'chrome',//2nd project
use:{
    browsername:'chromium',
    headless:false,

    ignoreHttpserror:true,
    Permissions:['geolocation'],
    screenshot: 'on',
    trace:'on',
    //video: 'retain-on-failure', //video take on failure
    video: 'on',
    launchOptions: {
            slowMo: 1000//slow; to visible each step
        }
  },
}
]
})
