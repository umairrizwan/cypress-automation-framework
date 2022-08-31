/// <reference types="Cypress" />
import LandPage from '../../support/pageObjects/landingpage'
import Outboundflights from '../../support/pageObjects/searchPage'
import FlexibleDate from '../../support/pageObjects/flexibledate';



describe('Air Malta E2E Test', function () {

    const landpage = new LandPage();
    const searchpage = new Outboundflights();
    const flexible = new FlexibleDate();

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it('Select first available flight date', function () {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'));

        //Homepage logo assertion
        landpage.getHomePageTitle().should('have.attr','src',this.data.HomepageLogoPath)

        landpage.getAcceptBttn().click();
        landpage.getOrigin().click();
        landpage.getFromDestTxtField().type(this.data.fromCity);
        landpage.getAvailableAirportFrom().click();
        landpage.getDestination().click();
        landpage.getToDestTextField().type(this.data.toCity);
        landpage.getAvailableAirportTo().click();
        landpage.getOnewayDropDown().click();
        landpage.getOneWayOption().click();
        landpage.getCalander().click();      
        landpage.getDatePickFromCalander().click({ force: true });      
        landpage.getSearchFlights().click();

        //URL Assertion
        cy.url().should('eq',this.data.expectedSearchUrl);
      
        //Title Assertion
        searchpage.getSearchTitle().should('have.text',this.data.expectedtitle);
        searchpage.getFlexibleDates().click();

        //Title Assertion
        flexible.getFlixiblePageTitle().should('have.text',this.data.FlexiblePageTitle);
        
        cy.SearchForFirstFlight();

    })
})