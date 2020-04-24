describe('Friends Form', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')

    })
    it('can select and click build a pie',()=>{
        cy.contains('Build a Pie')
        .click()
    })
    it('can type text in name field',()=>{
        cy.get('[name=name]')
        .type('jo')
    })
    it('can choose from dropDown menu',()=>{
        cy.get('[name=size]')
        .select('Extra Large')
    })
    it('can choose pepperoni',()=>{
        cy.get('[name=pepperoni]')
        .click()
    })
    it('can choose pineapple',()=>{
        cy.get('[name=pineapple]')
        .click()

    })
    it('can choose onions',()=>{
        cy.get('[name=onion]')
        .click()
    })
    it('can type special instructions',()=>{
        cy.get('[name=special]')
        .type('extra sauce')
    })
    it('can submit form',()=>{
        cy.contains('Add to Cart')
        .click()
    })


})


