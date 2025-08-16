'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notifcation = document.createElement('div');

  notifcation.className = `notification ${type}`;
  notifcation.style.position = 'absolute';
  notifcation.style.top = `${posTop}px`;
  notifcation.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.className = `title`;
  notificationTitle.textContent = `${title}`;

  notifcation.appendChild(notificationTitle);

  const notificationDesc = document.createElement('p');

  notificationDesc.textContent = `${description}`;

  notifcation.appendChild(notificationDesc);

  document.body.appendChild(notifcation);

  setTimeout(() => {
    notifcation.remove();
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
