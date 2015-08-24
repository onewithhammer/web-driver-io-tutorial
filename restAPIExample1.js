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

describe('Test Example Order System Rest APIs using supertest', function() {
  var app = request('http://localhost:3000');
 
  //  {
  //    id: Number,
  //    firstname: String,
  //    lastname:  String
  //   }
  it('Validate Customer #1', function (done) {
    app
      .get('/customer/1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.should.have.property('firstname').and.be.equal("John");
        res.body.firstname.should.be.instanceOf(String);
        res.body.should.have.property('lastname').and.be.equal("Smith");
        res.body.lastname.should.be.instanceOf(String);
        res.body.should.have.property('id').and.be.equal(1);
        res.body.id.should.be.instanceOf(Number);
        done();
      });
  });

  it('Validate Customer #2', function (done) {
    app
      .get('/customer/2')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('firstname').and.be.equal("John");
        res.body.firstname.should.be.instanceOf(String);
        res.body.should.have.property('lastname').and.be.equal("Doe");
        res.body.lastname.should.be.instanceOf(String);
        res.body.should.have.property('id').and.be.equal(2);
        res.body.id.should.be.instanceOf(Number);
        done();
      });
  });

  //  {
  //    id: number,
  //    desc: String,
  //    customerId:  Number
  //   }
  it('Validate Order for Customer #1', function (done) {
    app
      .get('/order?customerId=1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body[0].should.have.property('desc').and.be.equal("First order");
        res.body[0].desc.should.be.instanceOf(String);
        res.body[0].should.have.property('customerId').and.be.equal(1);
        res.body[0].customerId.should.be.instanceOf(Number);
        done();
      });
  });

  it('Validate Order for Customer #2', function (done) {
    app
      .get('/order?customerId=2')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body[0].should.have.property('desc').and.be.equal("Repeat Customer");
        res.body[0].desc.should.be.instanceOf(String);
        res.body[0].should.have.property('customerId').and.be.equal(2);
        res.body[0].customerId.should.be.instanceOf(Number);
        done();
      });
  });

  //  {
  //    id: number,
  //    desc: String,
  //    orderId:  Number
  //   }

  it('Validate Items in Order #1 for Customer #1', function (done) {
    app
      .get('/item?orderId=1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array).and.have.lengthOf(3);
        res.body[0].should.have.property('desc').and.be.equal("Bike");
        res.body[0].desc.should.be.instanceOf(String);
        res.body[0].should.have.property('orderId').and.be.equal(1);
        res.body[0].orderId.should.be.instanceOf(Number);

        res.body[1].should.have.property('desc').and.be.equal("Gas");
        res.body[1].desc.should.be.instanceOf(String);
        res.body[1].should.have.property('orderId').and.be.equal(1);
        res.body[1].orderId.should.be.instanceOf(Number);

        res.body[2].should.have.property('desc').and.be.equal("Car");
        res.body[2].desc.should.be.instanceOf(String);
        res.body[2].should.have.property('orderId').and.be.equal(1);
        res.body[2].orderId.should.be.instanceOf(Number);
        done();
      });
  });

  it('Validate Items in Order #1 for Customer #2', function (done) {
    app
      .get('/item?orderId=2')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.log("Found items for order #1, customer #2");
        res.body.should.be.instanceof(Array).and.have.lengthOf(3);
        res.body[0].should.have.property('desc').and.be.a.String.and.be.equal("Table");
        res.body[0].should.have.property('orderId').and.be.a.Number.and.be.equal(2);
        res.body[1].should.have.property('desc').and.be.a.String.and.be.equal("Chairs");
        res.body[1].should.have.property('orderId').and.be.a.Number.and.be.equal(2);
        res.body[2].should.have.property('desc').and.be.a.String.and.be.equal("Dishes");
        res.body[2].should.have.property('orderId').and.be.a.Number.and.be.equal(2);
        done();
      });
  });

  it('Create New Customer #3', function (done) {

    var cust = { firstname : 'Jane', lastname : 'Doe'};
    app
      .post('/customer')
      .send(cust)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('firstname').and.be.equal("Jane");
        res.body.should.have.property('lastname').and.be.equal("Doe");
        res.body.should.have.property('id').and.be.equal(3);
        done();
      });
  });

 it('Create New Order for Customer #3', function (done) {
    var order = { desc : 'Business order', customerId : 3};
    app
      .post('/order')
      .send(order)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('desc').and.be.equal("Business order");
        res.body.should.have.property('customerId').and.be.equal(3);
        done();
      });
  });

  it('Create 2 New Items for Order #1 for Customer #3', function (done) {

    var item1 = { desc : 'Books', orderId : 3};
    var item2 = { desc : 'Shelf', orderId : 3};

    app
      .post('/item')
      .send(item1)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.log("Added item #1 for order #1, customer #3");
        res.body.should.have.property('desc').and.be.equal('Books');
        res.body.should.have.property('orderId').and.be.equal(3);
      });

      app
      .post('/item')
      .send(item2)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.log("Added item #2 for order #1, customer #3");
        res.body.should.have.property('desc').and.be.equal('Shelf');
        res.body.should.have.property('orderId').and.be.equal(3);
        done();
      });
  });


  it('Delete Items, then Order then Customer all for #3', function (done) {

    app
      .delete('/item/7')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.log("Deleted item #1 for order #1, customer #3");
      });

    app
      .delete('/item/8')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.log("Deleted item #2 for order #1, customer #3");
      });

    app
      .delete('/order/3')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.log("Deleted order #1, customer #3");
      });

       app
      .delete('/customer/3')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.log("Deleted ocustomer #3");
        done();
      });
  });
});