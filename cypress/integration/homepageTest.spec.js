describe('Checks Opencodez Home Page', ()=>{
    it('Opens the page', ()=> {
        cy.visit('https://www.opencodez.com')
    });

    it('Verifies the logo', () => {
        cy.get('#logo').should('be.visible')
    })

    it('Checks the search functionality', () => {
        cy.get('#search-4').type('NodeJS');
        cy.get('#search-image').click();
    })
})