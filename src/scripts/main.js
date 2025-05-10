'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDesc = document.createElement('p');

  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notificationTitle.className = 'title';
  notificationTitle.textContent = title;

  notificationDesc.textContent = description;
  notificationDesc.style.whiteSpace = 'pre-wrap';

  notification.append(notificationTitle, notificationDesc);
  document.body.append(notification);

  setTimeout(() => (notification.style.visibility = 'hidden'), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n' + 'Notification should contain title and description.',
  'warning',
);
