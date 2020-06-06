'use strict';

var WIZARD_AMOUNT = 4;

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

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

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

var getEyeColor = function () {
  return EYE_COLORS[getRandomIndex(EYE_COLORS)];
};

var getWizard = function () {
  var name = getFullName();
  var coatColor = getCoatColor();
  var eyeColor = getEyeColor();

  return {
    name: name,
    coatColor: coatColor,
    eyeColor: eyeColor
  };
};

var getWizards = function (amount) {
  var wizardsList = [];

  for (var i = 0; i < amount; i++) {
    wizardsList.push(getWizard());
  }

  return wizardsList;
};

var renderWizards = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var renderSetupSimilarWizards = function (listElement, wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizards(wizards[i]));
  }

  listElement.appendChild(fragment);
};

var wizards = getWizards(WIZARD_AMOUNT);
renderSetupSimilarWizards(similarListElement, wizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
