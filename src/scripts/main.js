'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const titleEl = document.createElement('h2');
  const paragraphEl = document.createElement('p');

  element.classList.add('notification', type);
  titleEl.classList.add('title');

  titleEl.textContent = title;
  paragraphEl.textContent = description;

  element.style.cssText = `position: absolute; top: ${posTop}px; right: ${posRight}px;`;

  element.appendChild(titleEl);
  element.appendChild(paragraphEl);
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
