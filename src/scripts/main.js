'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationTypes = new Set(['success', 'warning', 'error']);

  if (!notificationTypes.has(type)) {
    return;
  }

  const notificationContainer = document.createElement('div');

  notificationContainer.classList.add('notification', type);
  notificationContainer.style.top = `${posTop}px`;
  notificationContainer.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  notificationContainer.append(notificationTitle, notificationDescription);

  document.body.append(notificationContainer);

  setTimeout(() => notificationContainer.remove(), 5000);
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
