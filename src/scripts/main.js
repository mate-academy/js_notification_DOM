'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const notificationContainer = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationContainer.className = `notification ${type}`;
  notificationTitle.className = 'title';
  notificationDescription.className = type;

  notificationTitle.textContent = title;
  notificationDescription.textContent = description;
  notificationDescription.style.whiteSpace = 'pre-line';

  notificationContainer.append(notificationTitle, notificationDescription);

  notificationContainer.style.top = `${posTop}px`;
  notificationContainer.style.right = `${posRight}px`;

  body.append(notificationContainer);

  setTimeout(() => {
    notificationContainer.style.visibility = 'hidden';
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
