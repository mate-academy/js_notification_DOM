'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');

  notificationElement.classList.add('notification');

  notificationElement.classList.add(`${type}`);

  const titleOfNotification = document.createElement('h2');

  titleOfNotification.classList.add('title');

  titleOfNotification.append(title);

  notificationElement.append(titleOfNotification);

  const descriptionOfNotification = document.createElement('p');

  descriptionOfNotification.append(description);

  notificationElement.append(descriptionOfNotification);

  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  const body = document.body;

  body.append(notificationElement);

  setTimeout(() => notificationElement.remove(), 2000);
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
