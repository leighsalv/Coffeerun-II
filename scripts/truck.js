/*Serves the same purpose as traditional server-side code*/
/*Handles BUSINESS LOGIC*/

(function(window) {
  "use strict";
  /* eslint-disable no-console */
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }
  Truck.prototype.createOrder = function(order) {
    console.log("Adding order for " + order.emailAddress);
    this.db.add(order.emailAddress, order); //store coffee order
  };
  Truck.prototype.deliverOrder = function(customerId) {
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId); //removes order once delivered
  };
  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log("Truck #" + this.truckId + " has pending orders: ");
    customerIdArray.forEach(function(id) { //retrieves all orders as key/value pairs
      console.log(this.db.get(id));
    }.bind(this)); //bind returns new version of function
  };
  App.Truck = Truck;
  window.App = App;
})(window);