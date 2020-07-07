'use strict';

window.setup = (function () {
  var createErrorNotification = function (message) {
    var errorMsg = document.createElement('div');
    errorMsg.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    errorMsg.style.position = 'absolute';
    errorMsg.style.left = 0;
    errorMsg.style.right = 0;
    errorMsg.style.fontSize = '30px';

    errorMsg.textContent = message;

    return errorMsg;
  };

  var onError = function (message) {
    var errorMsg = createErrorNotification(message);
    document.body.insertAdjacentElement('afterbegin', errorMsg);

    setTimeout(function () {
      document.body.removeChild(errorMsg);
    }, 3000);
  };

  var onLoad = function (wizards) {
    window.render(wizards);
  };

  var onFormSuccess = function () {
    userDialog.classList.add('hidden');
  };

  var onFormSubmit = function (evt) {
    evt.preventDefault();

    window.backend.save(new FormData(form), onFormSuccess, onError);
  };

  var renderSetupSimilarWizards = function () {
    window.backend.load(onLoad, onError);
  };

  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  renderSetupSimilarWizards();
  form.addEventListener('submit', onFormSubmit);
})();
