'use strict';

window.wizard = (function () {
  var onWizardCoatClick = function () {
    var newCoatColor = window.mocks.getCoatColor();

    wizardCoat.style.fill = newCoatColor;
    coatColorInput.value = newCoatColor;

    wizard.onCoatChange(newCoatColor);
  };

  var onWizardEyesClick = function () {
    var newEyesColor = window.mocks.getEyesColor();

    wizardEyes.style.fill = newEyesColor;
    eyesColorInput.value = newEyesColor;

    wizard.onEyesChange(newEyesColor);
  };

  var onWizardFireballClick = function () {
    var newFireballColor = window.mocks.getFireballColor();

    wizardFireball.style.backgroundColor = newFireballColor;
    fireballColorInput.value = newFireballColor;

    wizard.onFireballChange(newFireballColor);
  };

  var addWizardEventListeners = function () {
    wizardCoat.addEventListener('click', onWizardCoatClick);
    wizardEyes.addEventListener('click', onWizardEyesClick);
    wizardFireball.addEventListener('click', onWizardFireballClick);
  };

  var removeWizardEventListeners = function () {
    wizardCoat.removeEventListener('click', onWizardCoatClick);
    wizardEyes.removeEventListener('click', onWizardEyesClick);
    wizardFireball.removeEventListener('click', onWizardFireballClick);
  };

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {},
    onFireballChange: function () {},
    addWizardEventListeners: addWizardEventListeners,
    removeWizardEventListeners: removeWizardEventListeners
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var coatColorInput = document.querySelector('input[name="coat-color"]');
  var eyesColorInput = document.querySelector('input[name="eyes-color"]');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  return wizard;
})();
