'use strict';

window.dialog = (function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, function (escEvent) {
      escEvent.preventDefault();
      closePopup();
    }, [userNameInput]);
  };

  var onWizardCoatClick = function () {
    var coatColor = window.mocks.getCoatColor();

    wizardCoat.style.fill = coatColor;
    coatColorInput.value = coatColor;
  };

  var onWizardEyesClick = function () {
    var eyesColor = window.mocks.getEyesColor();

    wizardEyes.style.fill = eyesColor;
    eyesColorInput.value = eyesColor;
  };

  var onWizardFireballClick = function () {
    var fireballColor = window.mocks.getFireballColor();

    wizardFireball.style.backgroundColor = fireballColor;
    fireballColorInput.value = fireballColor;
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', onWizardCoatClick);
    wizardEyes.addEventListener('click', onWizardEyesClick);
    wizardFireball.addEventListener('click', onWizardFireballClick);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = '';
    setup.style.left = '';

    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', onWizardCoatClick);
    wizardEyes.removeEventListener('click', onWizardEyesClick);
    wizardFireball.removeEventListener('click', onWizardFireballClick);
  };

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setup = document.querySelector('.setup');
  var userNameInput = document.querySelector('.setup-user-name');

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var coatColorInput = document.querySelector('input[name="coat-color"]');
  var eyesColorInput = document.querySelector('input[name="eyes-color"]');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function () {
    var valueLength = userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity('Удалите лишние ' + (MAX_NAME_LENGTH - valueLength) + ' симв.');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

})();
