describe('User Flow Test', () => {
  it('should allow a user to browse items, add to cart, and place an order', () => {
    // Visit the home page
    //cy.visit('http://localhost:9000/quasar_sneakers/#/');
    cy.visit('https://danazhunussova.github.io/quasar_sneakers/#/');

    cy.document().then(doc => {
      console.log(doc.documentElement.innerHTML);
    });

    // page loads & items are visible
    cy.get(' .q-header').should('exist');
    cy.get('.q-list').should('exist');

    // Search for sneakers
    cy.get('input[placeholder="Поиск"]').type('Кроссовки');
    cy.get('.q-list .my-card').should('contain.text', 'Кроссовки');

    // Add the first item to the cart
    cy.get('.q-list .my-card').first().find('.add-to-cart-button').click();

    // Open the cart drawer
    cy.get('.header-cart-button').click();
    cy.get('.q-drawer').should('be.visible');

    // Verify the cart has items and proceed to checkout
    cy.get('.q-drawer').find('.q-list').should('have.length', 1);

    cy.get('.orderbutton').contains('Оформить заказ').should('not.be.disabled').click();

    // Confirm the order
    cy.get('.q-drawer').should('contain.text', 'Заказ оформлен');

    cy.get('.q-drawer').find('.text-grey-7').invoke('text').then((text) => {
      const orderIdMatch = text.match(/Ваш заказ №(\d+)/);
      if (orderIdMatch){
        const orderId = orderIdMatch[1];
        cy.log(`Order ID: ${orderId}`);
        expect(orderId).to.not.be.empty;
        expect(orderId).to.match(/^\d+$/);
      } else {
        throw new Error('Order ID not found in the confirmation text');
      }
    });
  });
});
// making e2e testing using cypress
// npm install cypress --save-dev
// create file user-flow.spec.js in cypress/e2e/
// write code
//
//npx cypress open
//
// npx cypress run


/*
git add .
git commit -m ""
git push origin main
*/

/*
npm run dev //this opens it in localhost...
npm run build
npm run deploy
*/
