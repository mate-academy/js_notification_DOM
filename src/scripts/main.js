'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notificationMessage = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationMessage.className = `notification ${type}`;
  notificationTitle.className = 'title';

  notificationMessage.style.top = `${posTop}px`;
  notificationMessage.style.right = `${posRight}px`;
  notificationTitle.textContent = title;
  notificationDescription.textContent = description;

  notificationMessage.append(notificationTitle);
  notificationMessage.append(notificationDescription);
  body.append(notificationMessage);

  setTimeout(() => {notificationMessage.remove();}, 2000);
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
