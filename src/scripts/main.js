'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const h2Element = document.createElement('h2');
  const pElement = document.createElement('p');

  element.classList.add('notification', type);
  h2Element.classList.add('title');

  h2Element.textContent = title;
  pElement.textContent = description;

  element.appendChild(h2Element);
  element.appendChild(pElement);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 2000);
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
