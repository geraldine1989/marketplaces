describe('the boxes', () => {
    beforeEach(() => {
        cy.visit('app.html')
    })

    it('contains one box', () => {
        cy.get('[data-cy="boxes"]').find('.box').should('have.length', 1)
    })

    it('adds boxes', () => {
        for (let index = 0; index < 3; index++) {
            cy.get('[data-cy="button"]').click()
        }
        cy.get('[data-cy="boxes"]').find('.box').should('have.length', 4)
    })

    it('toggles type of box', () => {
        for (let index = 0; index < 3; index++) {
            cy.get('[data-cy="button"]').click()
        }
        cy.get('[data-cy="box"]').eq(0).contains('marketplace')
        cy.get('[data-cy="box"]').eq(1).contains('crowdfunding')
        cy.get('[data-cy="link"]').eq(2).should('have.class', 'box__content__link--marketplace')
        cy.get('[data-cy="link"]').eq(3).should('have.class', 'box__content__link--crowdfunding')
    }) 
})