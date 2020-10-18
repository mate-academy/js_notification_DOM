'use strict';

const pushNotification = (top, right, title, description, type) => {
  const errorMessage = document.createElement('div');
  const errorMessageTitle = document.createElement('h2');
  const errorMessageDescription = document.createElement('p');

  errorMessage.className = `notification ${type}`;
  errorMessage.style.top = `${top}px`;
  errorMessage.style.right = `${right}px`;

  errorMessageTitle.className = 'title';
  errorMessageTitle.textContent = title;

  errorMessageDescription.textContent = description;

  errorMessage.append(errorMessageTitle);
  errorMessage.append(errorMessageDescription);
  document.body.append(errorMessage);

  setTimeout(() => errorMessage.remove(), 2000);
};

pushNotification(
  10,
  20,
  'Attention!',
  `Did you repeat the theory exactly before the lecture?`,
  'error'
);
