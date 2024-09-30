'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElem = document.querySelector('body');

  const notificationElem = document.createElement('div');

  notificationElem.className = 'notification ' + type;
  notificationElem.style.top = `${posTop}px`;
  notificationElem.style.right = `${posRight}px`;

  const header = document.createElement('h2');

  header.className = 'title';
  header.textContent = title;

  notificationElem.append(header);

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;
  notificationElem.append(notificationDescription);

  bodyElem.append(notificationElem);

  setTimeout(() => {
    notificationElem.style.display = 'none';
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
