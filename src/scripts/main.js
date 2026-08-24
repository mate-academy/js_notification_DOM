'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const notifTitle = document.createElement('h2');
  const notifDescription = document.createElement('p');

  notification.classList.add('notification', type);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notifTitle.classList.add('title');

  notifTitle.textContent = title;
  notifDescription.textContent = description;

  notification.append(notifTitle, notifDescription);

  document.body.append(notification);

  setTimeout(() => {
    notification.style.display = 'none';
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
