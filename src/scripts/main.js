'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');
  const bodyElement = document.querySelector('body');

  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notificationElement.classList.add('notification', type);
  titleElement.classList.add('title');

  titleElement.textContent = title;
  descriptionElement.textContent = description;

  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  notificationElement.append(titleElement, descriptionElement);
  bodyElement.append(notificationElement);

  setTimeout(() => {
    bodyElement.removeChild(notificationElement);
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
