'use strict';

window.render = (function () {
  var WIZARD_AMOUNT = 4;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var render = function (data) {
    var takeNumber = data.length > WIZARD_AMOUNT ? WIZARD_AMOUNT : data.length;

    similarList.innerHTML = '';

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }

    similarList.appendChild(fragment);
    similar.classList.remove('hidden');
  };

  var userDialog = document.querySelector('.setup');
  var similar = userDialog.querySelector('.setup-similar');
  var similarList = similar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  return render;
})();
