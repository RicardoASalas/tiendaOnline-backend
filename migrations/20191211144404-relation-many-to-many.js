'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
   return [
    queryInterface.addConstraint('Invoice_Products', ['ProductId'], {
      type: 'FOREIGN KEY',
      name: 'FK_InvoiceProduct_Product_1',
      references: {
        table: 'Products',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }),
    queryInterface.addConstraint('Invoice_Products', ['InvoiceId'], {
      type: 'FOREIGN KEY',
      name: 'FK_InvoiceProduct_Invoice_1',
      references: {
        table: 'Invoices',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }),
  ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
   return [
    queryInterface.removeConstraint('Invoice_Products', 'FK_InvoiceProduct_Product_1'),
    queryInterface.removeConstraint('Invoice_Products', 'FK_InvoiceProduct_Invoice_1'),
  ]
  }
};
