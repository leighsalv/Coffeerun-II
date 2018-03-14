(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  // Constructor checks valid url
  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  //$.post method only requires two pieces of information:
  //.add adds orders to the server
  //the URL of the server to send the request to and what data to include.
  //key argument is not used, but kept so it is identical to the add menthod of DataStore
  RemoteDataStore.prototype.add = function(key, val) {
    // $.post(this.serverUrl, val, function(serverResponse) {
    //   console.log(serverResponse);
    // });

    $.ajax(this.serverUrl, {
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(val),
      success: function(serverResponse) {
        console.log(serverResponse);
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  //.getAll: retrieve all orders from the server, doesn't handle response after retrieving orders & spitting back out
  //having a 'cb' (callback) as a param lets us access func argument & server response
  //$.get: dont pass data b/c we are retrieving information instead of saving info
  RemoteDataStore.prototype.getAll = function(cb) {
    // $.get(this.serverUrl, function(serverResponse) {
    //   console.log(serverResponse);
    //   cb(serverResponse);
    // });
    $.ajax(this.serverUrl + "coffeeorders/", {
      type: "GET",
      success: function(serverResponse) {
        console.log(serverResponse);
        cb(serverResponse);
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  };

  //.get: gets a single coffee order
  RemoteDataStore.prototype.get = function(key, cb) {
    // $.get(this.serverUrl + "/" + key, function(serverResponse) {
    //   console.log(serverResponse);
    //   cb(serverResponse);
    //});
    $.ajax("coffeeorders" + "/" + key, {
      type: "GET",
      success: function(serverResponse) {
        console.log(serverResponse);
        cb(serverResponse);
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    // $.ajax(this.serverUrl + "/" + key, {
    //   //type: "DELETE"
    //   type: "POST",
    //   url: this.serverUrl + "/" + key,
    //   data: {_method:"DELETE"}
    // });

    $.ajax(this.serverUrl + "?emailAddress=" + key, {
      type: "GET",
      dataType: "json",
      success: function(serverResponse) {
        $.ajax("http://localhost:2403/coffeeorders" + "/" + serverResponse[0].id, {
          type: "DELETE",
          error: function(xhr) {
            alert(xhr.responseText);
          }
        });
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
