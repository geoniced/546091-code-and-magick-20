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

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    window.wizard.addWizardEventListeners();
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = '';
    setup.style.left = '';

    document.removeEventListener('keydown', onPopupEscPress);
    window.wizard.removeWizardEventListeners();
  };

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setup = document.querySelector('.setup');
  var userNameInput = document.querySelector('.setup-user-name');

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
