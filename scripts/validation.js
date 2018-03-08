(function(window) {
  "use strict";
  var App = window.App || {};

  // Test email against a regex & returns true or false
  var Validation = {
    isCompanyEmail: function(email) {
      return /.+@bignerdranch\.com$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
