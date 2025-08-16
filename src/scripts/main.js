'use strict';

const bodyElement = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const divElement = document.createElement('div');

  divElement.classList.add('notification', type);

  const h2Element = document.createElement('h2');

  h2Element.classList.add('title');
  h2Element.textContent = title;

  const pElement = document.createElement('p');

  pElement.textContent = description;

  divElement.prepend(h2Element);
  divElement.append(pElement);

  divElement.style.top = `${posTop}px`;
  divElement.style.right = `${posRight}px`;

  bodyElement.append(divElement);

  setTimeout(() => (divElement.style.visibility = 'hidden'), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
