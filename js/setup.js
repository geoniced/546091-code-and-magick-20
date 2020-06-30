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
    window.backend.load(function (wizards) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < WIZARD_AMOUNT; i++) {
        fragment.appendChild(createWizard(wizards[i]));
      }

      listElement.appendChild(fragment);
    });
  };

  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  renderSetupSimilarWizards(similarListElement);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
