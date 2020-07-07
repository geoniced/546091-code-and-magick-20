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

  var onLoad = function (data) {
    wizards = data;
    updateWizards();
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

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    var sortedWizards = wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }

      return rankDiff;
    });

    window.render(sortedWizards);
  };

  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  var wizards = [];
  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  renderSetupSimilarWizards();
  form.addEventListener('submit', onFormSubmit);
})();
