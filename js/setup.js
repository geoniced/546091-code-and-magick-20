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
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderSetupSimilarWizards = function (listElement) {
    var wizards = getWizards(WIZARD_AMOUNT);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }

    listElement.appendChild(fragment);
  };

  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  renderSetupSimilarWizards(similarListElement);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
