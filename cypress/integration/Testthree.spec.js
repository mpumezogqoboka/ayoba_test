/// <reference types='cypress'/>


it('Ayoba contact us page', () => {

    const imageFile = 'mezzo.jpg';

    cy.visit('https://www.ayoba.me/contact-en/')
    cy.get('#zen_name').type('Abongile Gqoboka')
    cy.get('#zen_email').type('abongile@gmail')
    cy.get('#\\33 60002776780').select('I need help using the Ayoba app').should('have.value', 'help')
    cy.get('#phoneDialingCodes').select('(+234) South Africa').should('have.value', '27')
    cy.get('#userPhoneNumber').type('0814373114')
    cy.get('#zen_desc').type('I have been trying to use the Ayoba app and I am struggling can you please assist me and make understand how the app works and how to use the app. thank you. ')
    cy.fixture('example.json').then( (filecontent) => {

        cy.get('#zen_files').attachFile(imageFile);
    })
    cy.get('#zrf_submit').click()
})