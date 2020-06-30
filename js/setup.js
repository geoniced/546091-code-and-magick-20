'use strict';

window.setup = (function () {
  var WIZARD_AMOUNT = 4;

  var getWizards = function (amount) {
    var wizardsList = [];

    for (var i = 0; i < amount; i++) {
      wizardsList.push(window.mocks.getWizard());
    }

    return wizardsList;
  };

  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderSetupSimilarWizards = function (listElement) {
    var onLoad = function (wizards) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < WIZARD_AMOUNT; i++) {
        fragment.appendChild(createWizard(wizards[i]));
      }

      listElement.appendChild(fragment);
    };

    var onError = function (message) {
      var errorMsg = document.createElement('div');
      errorMsg.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      errorMsg.style.position = 'absolute';
      errorMsg.style.left = 0;
      errorMsg.style.right = 0;
      errorMsg.style.fontSize = '30px';

      errorMsg.textContent = message;
      document.body.insertAdjacentElement('afterbegin', errorMsg);
    };

    window.backend.load(onLoad, onError);
  };

  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  renderSetupSimilarWizards(similarListElement);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
