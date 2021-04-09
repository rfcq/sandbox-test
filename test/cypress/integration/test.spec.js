
describe('Teste Cypress', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#object-group').click();
    })
    it('Open TextField and input', () => {
        cy.get('#textfield').click();
        cy.get('#text-field').type('Teste de input');
    });
    it('Open RadioButton page and select some ones', () => { 
        cy.get('#radiobutton').click();
        cy.get('#one').check();
        cy.get('#opt-selected').should('contain.text', 'Um');
    });
    it('Open ComboBox page and select "Opção 1"', () => {
        cy.get('#combobox').click();
        cy.get('#dropdown').select('Opção 1');
        cy.get('#opt-selected').contains('Opção 1');
    });
    it('Open Checkbox page and mark some ones', () => {
        cy.get('#checkbox').click();
        cy.get('#jack').check();
        cy.get('#checked-names-list').contains('Jack');
    });
    
})