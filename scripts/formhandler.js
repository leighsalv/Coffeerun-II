/*FormHandler module will prevent the browser from trying
to send form data to a server. Instead, it will read the values
from the form when the user clicks the Submit button. Then it
will send that data to a Truck instance, using the createOrder method */

(function(window) {
  "use strict";
  /* eslint-disable no-console */
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    //Retrieve element from DOM
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log("Setting submit handler for form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault(); //ensure that submitting the form does not take the user away from the CoffeeRun page
      //var data = $(this).serializeArray(); //get values from form (this: gives a wrapped obj used for serializeArray)

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);
      fn(data);
      this.reset(); //clears out fields in UI
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.addInputHandler = function(fn) {
    console.log("Setting input handler for form");
    // Extract email from event target
    this.$formElement.on("input","[name='emailAddress']", function(event){
      var emailAddress = event.target.value;
      var message = "";
      // Checks if email is valid or invalid
      if(fn(emailAddress)) {
        event.target.setCustomValidity("");
      } else {
        message = emailAddress + " is not authorized email address!";
        event.target.setCustomValidity(message);
      }
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
