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

// from module4-task1
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userDialog = document.querySelector('.setup');

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

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

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

renderSetupSimilarWizards(similarListElement);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// module4-task1
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup'); // Этот селектор уже имеется в одной из переменных выше, но мне кажется, что при разбитии кода на модули оно понадобится
var userNameInput = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && evt.target !== userNameInput) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
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
