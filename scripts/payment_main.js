(function(window) {
  "use strict";
  /* eslint-disable no-console */

  var PAYMENT_FORM_SELECTOR = "[payment-order='form']";
  var POPUP_SELECTOR = "[data-payment-modal='popup']";

  var App = window.App;
  var Payment = App.Payment;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var PopUp = App.PopUp;
  var $ = window.jQuery;
  var myPayment = new Payment(new DataStore());
  window.myPayment = myPayment;
  var popUp = new PopUp(POPUP_SELECTOR);
  var paymentFormHandler = new FormHandler(PAYMENT_FORM_SELECTOR);

  // Loads POP UP window to pay
  paymentFormHandler.addSubmitHandler(function(data) {
    myPayment.createPayment.call(myPayment, data);
    popUp.addInfo.call(popUp, data);
    $("#payWindow").modal();
  });

  console.log(paymentFormHandler);
})(window);
