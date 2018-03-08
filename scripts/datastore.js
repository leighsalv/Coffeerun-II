/*Serves the same purpose as traditional server-side code*/
/*Acts as DATA STORAGE*/

(function(window) {
  "use strict";
  /* eslint-disable no-console */
  var App = window.App || {}; //{} new empty object if there's no App property

  function DataStore() { //constructor
    /* eslint-disable no-console */
    console.log("running the DataStore function");
    this.data = {};
  }
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val; //key: email address  val: order info
  };
  //accepts key, looks up value in data property, & returns it
  DataStore.prototype.get = function(key) {
    return this.data[key];
  };
  //instead of looking up value for 1 key, it returns reference to data property
  DataStore.prototype.getAll = function() {
    return this.data;
  };
  //remove key/value pair from an object
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };
  App.DataStore = DataStore;
  window.App = App;
})(window);
