class Outboundflights
{
    getFlexibleDates()
    {
        return  cy.get('.IconUI__Icon-jYNWTA.lcymnC.material-icons').contains('calendar_today');
    }

    getSearchTitle()
    {
        return cy.get('h4.sc-cHjxUU.eDrPdP');
    }
}

export default Outboundflights