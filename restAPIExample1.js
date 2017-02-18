// restAPIExample1.js
//
// This test script will demonstrate how to use supertest to test the
// Example Order System Rest APIs.

// This example will validate existing data (customer/order/item) sets and then
// add records and finally delete records.
//  
//  Data: 
//      Customer(s)
//          Order(s)
//            Item(s)

// To Run: 
//  Start json-server with json database file (db.json)
//  $ cd json-server
//  $ json-server db.json
//
//  see https://github.com/typicode/json-server for project
//  see http://jsonplaceholder.typicode.com/ for working demo online of json-server
//
// then run script
// $ mocha restAPIExample1.js

// use a tool like postman to view the data before and after the script is ran.
//
// URLs:
//  GET http://localhost:3000/customer            - all customer(s)
//  GET http://localhost:3000/customer/2          - customer #2
//  GET http://localhost:3000/order/              - all order(s)
//  GET http://localhost:3000/order?customerId=1  - order(s) for customer #1
//  GET http://localhost:3000/item                - all item(s)
//  GET http://localhost:3000/item?orderId=1      - item(s) for order #1

//  POST http://localhost:3000/customer           - add a customer
//  DELETE http://localhost:3000/customer/3       - delete customer #3 


// required libraries
var request = require('supertest'),
   should = require('should');

// Custom assertions makes the code cleaner
should.Assertion.add('validCustomer', function(first, last, id) {
  this.params = { operator: 'to be a valid customer' };

  var config = this.obj;

  config.should.have.property('firstname').and.be.equal(first);
  config.firstname.should.be.instanceOf(String);
  config.should.have.property('lastname').and.be.equal(last);
  config.lastname.should.be.instanceOf(String);
  config.should.have.property('id').and.be.equal(id);
  config.id.should.be.instanceOf(Number);
}, true);

should.Assertion.add('validOrder', function(desc, id) {
  this.params = { operator: 'to be a valid order' };

  var config = this.obj;

  config.should.have.property('desc').and.be.equal(desc);
  config.desc.should.be.instanceOf(String);
  config.should.have.property('customerId').and.be.equal(id);
  config.id.should.be.instanceOf(Number);
}, true);

should.Assertion.add('validItem', function(desc, id) {
  this.params = { operator: 'to be a valid item' };

  var config = this.obj;

  config.should.have.property('desc').and.be.equal(desc);
  config.desc.should.be.instanceOf(String);
  config.should.have.property('orderId').and.be.equal(id);
  config.id.should.be.instanceOf(Number);
}, true);


describe('Test Example Order System Rest APIs using supertest', function() {
  var app = request('http://localhost:3000');
 
  //  {
  //    id: Number,
  //    firstname: String,
  //    lastname:  String
  //   }
  it('Validate Customer #1', function () {
    app
      .get('/customer/1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        //  individual assertions
        res.body.should.have.property('firstname').and.be.equal("John");
        res.body.firstname.should.be.instanceOf(String);
        res.body.should.have.property('lastname').and.be.equal("Smith");
        res.body.lastname.should.be.instanceOf(String);
        res.body.should.have.property('id').and.be.equal(1);
        res.body.id.should.be.instanceOf(Number);
        console.log("Customer #1 Validated");
      });
  });

  it('Validate Customer #2', function () {
    app
      .get('/customer/2')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        // customer assertion - validCustomer()
        res.body.should.have.validCustomer("John", "Doe", 2);
        console.log("Customer #2 Validated");
      });
  });

  //  {
  //    id: number,
  //    desc: String,
  //    customerId:  Number
  //   }
  it('Validate Order #1 for Customer #1', function () {
    app
      .get('/order?customerId=1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        // customer assertion - validOrder()
        res.body[0].should.have.validOrder("First order", 1);
        console.log("Order #1 for Customer #1 Validated");
      });
  });

  it('Validate Order #1 for Customer #2', function () {
    app
      .get('/order?customerId=2')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        // customer assertion - validOrder()
        res.body[0].should.have.validOrder("Repeat Customer", 2);
        console.log("Order #1 for Customer #2 Validated");
      });
  });

  //  {
  //    id: number,
  //    desc: String,
  //    orderId:  Number
  //   }

  it('Validate Items in Order #1 for Customer #1', function () {
    app
      .get('/item?orderId=1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        console.log("Found items for order #1, customer #1");
        res.body.should.be.instanceof(Array).and.have.lengthOf(3);
        res.body[0].should.have.validItem("Bike", 1);
        res.body[1].should.have.validItem("Gas", 1);
        res.body[2].should.have.validItem("Car", 1);
        console.log("Items for Order #1 for Customer #1 Validated");
      });
  });

  it('Validate Items in Order #1 for Customer #2', function () {
    app
      .get('/item?orderId=2')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        console.log("Found items for order #1, customer #2");
        res.body.should.be.instanceof(Array).and.have.lengthOf(3);
        res.body[0].should.have.validItem("Table", 2);
        res.body[1].should.have.validItem("Chairs", 2);
        res.body[2].should.have.validItem("Dishes", 2);
        console.log("Items for Order #1 for Customer #2 Validated");
      });
  });

  it('Create New Customer #3', function () {

    var cust = { firstname : 'Jane', lastname : 'Doe'};
    app
      .post('/customer')
      .send(cust)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        res.body.should.have.validCustomer("Jane", "Doe", 3);
        console.log("New Customer #3 Created");
      });
  });

 it('Create New Order #1 for Customer #3', function () {
    var order = { desc : 'Business Order', customerId : 3};
    app
      .post('/order')
      .send(order)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        res.body.should.have.validOrder("Business Order", 3);
        console.log("New Order #1 for Customer #3 Created");
      });
  });

  it('Create 2 New Items for Order #1 for Customer #3', function () {

    var item1 = { desc : 'Books', orderId : 3};
    var item2 = { desc : 'Shelf', orderId : 3};

    app
      .post('/item')
      .send(item1)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        console.log("Added item #1 for order #1, customer #3");
        res.body.should.have.validItem("Books", 3);
      });

      app
      .post('/item')
      .send(item2)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        console.log("Added item #2 for order #1, customer #3");
        res.body.should.have.validItem("Shelf", 3);
      });
  });

  it('Delete Items, then Order then Customer all for #3', function () {

    app
      .delete('/item/7')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        console.log("Deleted item #1 for order #1, customer #3");
      });

    app
      .delete('/item/8')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        console.log("Deleted item #2 for order #1, customer #3");
      });

    app
      .delete('/order/3')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        console.log("Deleted order #1, customer #3");
      });

       app
      .delete('/customer/3')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return err;
        console.log("Deleted ocustomer #3");
      });
  });
});