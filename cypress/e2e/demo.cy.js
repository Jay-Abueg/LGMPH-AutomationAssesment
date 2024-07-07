import '../support/commands'
import 'cypress-mochawesome-reporter/register'
import user from '../fixtures/registration.json'

const { expect } = require("chai")

describe('Automation Assesment', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it('Navigate to the demo home page', () => {
        cy.visit('http://www.way2automation.com/demo.html#')
    })


    it('List action names of each category in json format', () => {

    })

    it('Retrive Traget url for the "Submit Button Clicked" event within the "Dynamic Elements" category', () => {
        cy.get('a[href*="https://way2automation.com/"]')
        // cy.get('h2', 'Submit Button Clicked')
        // .invoke('attr', 'href')
        // .then(href => {
        //     cy.log(href);
        // }).as('retrivedURL')
    })

    it('Visit the retrived link from Dynamic Elements category', () => {
        cy.visit('@retrivedURL')
    })

    it('Fill out the dummy registration', () => {
        cy.visit('https://way2automation.com/way2auto_jquery/index.php') // hardcoded since step 2 is failing
        cy.get('[name="name"]').type(user.name)  
        cy.get('[name="phone"]').type(user.phone)
        cy.get('[name="email"]').type(user.email)
        cy.get('[name="country"]').type(user.country)
        cy.get('[name="city"]').type(user.city)
        cy.get('[id=load_box]').children('[name="username"]').type(user.username)
        cy.get('[id=load_box]').children('[name="password"]').type(user.password)
    })

    it(' Click the "EXPLORE LIFETIME MEMBERSHIP" link', () => {
        cy.get('#load_form > div:nth-child(13) > div > p:nth-child(2) > a').click()
    })

    it('Scroll to "30+ Courses video library FREE ACCESS"', () => {
        cy.visit('https://www.way2automation.com/lifetime-membership-club/')
        cy.get('[id="post-25580"]').click()
    })

    it('Navigates to "Automation Architect Selenium with 7 live projects"', () => {
        //cy.contains("Automation Architect Selenium with 7 live projects").click()
        cy.visit('https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects')

    })

    it(`Validate URL page`, () => {
        cy.url().should('eq',"https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects" )
    })

})