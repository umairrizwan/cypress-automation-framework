class LandPage
{
    getHomePageTitle()
    {
        return cy.get('.menu.container .white-logo');
    }

    getAcceptBttn()
    {
        return cy.get('.btn.btn.btn-lg.btn-primary.cookie-accept').contains('Accept');
    }

    getOrigin()
    {
        return cy.get('.route-selection-origin > .input-holder > .form-control > .ellipsis');
    }

    getFromDestTxtField()
    {
        return cy.get('.mobile-container-content > .form-control');
    }

    getAvailableAirportFrom()
    {
        return  cy.get('.airport-option');
    }

    getDestination()
    {
        return cy.get('.route-selection-destination > .input-holder > .form-control');
    }

    getToDestTextField()
    {
        return cy.get('.mobile-container-content > .form-control');
    }

    getAvailableAirportTo()
    {
        return  cy.get('.airport-option');
    }

    getCalander()
    {
        return cy.get('.startDate > .form-control');
    }

    getOnewayDropDown()
    {
        return cy.get(':nth-child(1) > .select-input > .material-icons');
    }

    getOneWayOption()
    {
        return cy.get('.select-option.ellipsis:nth-child(2)').contains('One way');
    }

    getDatePickFromCalander()
    {
        return cy.get('[aria-label="Thu Sep 08 2022"] > .date-picker-day-cell > .calendar-day');
    }

    getSearchFlights()
    {
        return cy.get('.btn.btn-primary.btn-lg.d-none.d-md-block').contains('Find flights');
    }
}

export default LandPage