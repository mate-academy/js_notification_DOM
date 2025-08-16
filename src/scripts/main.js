'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');

  notificationElement.className = `notification ${type}`;

  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;

  notificationElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  notificationElement.appendChild(descriptionElement);

  document.body.appendChild(notificationElement);

  setTimeout(() => {
    notificationElement.style.display = 'none';
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
