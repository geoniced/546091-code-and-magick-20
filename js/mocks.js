'use strict';

window.mocks = (function () {
  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var WIZARD_LAST_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var getRandomIndex = function (array) {
    var amount = array.length - 1;
    var index = Math.round(Math.random() * amount);

    return index;
  };

  var getFirstName = function () {
    return WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)];
  };

  var getLastName = function () {
    return WIZARD_LAST_NAMES[getRandomIndex(WIZARD_LAST_NAMES)];
  };

  var getFullName = function () {
    return getFirstName() + ' ' + getLastName();
  };

  var getCoatColor = function () {
    return COAT_COLORS[getRandomIndex(COAT_COLORS)];
  };

  var getEyesColor = function () {
    return EYE_COLORS[getRandomIndex(EYE_COLORS)];
  };

  var getFireballColor = function () {
    return FIREBALL_COLORS[getRandomIndex(FIREBALL_COLORS)];
  };

  var getWizard = function () {
    var name = getFullName();
    var coatColor = getCoatColor();
    var eyesColor = getEyesColor();

    return {
      name: name,
      coatColor: coatColor,
      eyesColor: eyesColor
    };
  };

  return {
    getRandomIndex: getRandomIndex,
    getCoatColor: getCoatColor,
    getEyesColor: getEyesColor,
    getFireballColor: getFireballColor,
    getWizard: getWizard
  };
})();
