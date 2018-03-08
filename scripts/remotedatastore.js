(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  // Constructor checks valid url
  function RemoteDataStore(url) {
    if(!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  //$.post method only requires two pieces of information:
  //.add adds orders to the server
  //the URL of the server to send the request to and what data to include.
  //key argument is not used, but kept so it is identical to the add menthod of DataStore
  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse){
      console.log(serverResponse);
    });
  };

  //.getAll: retrieve all orders from the server, doesn't handle response after retrieving orders & spitting back out
  //having a 'cb' (callback) as a param lets us access func argument & server response
  //$.get: dont pass data b/c we are retrieving information instead of saving info
  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse){
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  //.get: gets a single coffee order
  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + "/" + key, function(serverResponse){
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    $.ajax(this.serverUrl + "/" + key, {
      type: "DELETE"
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
