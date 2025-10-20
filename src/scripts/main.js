'use strict';

const pushNotification = (
  posTop,
  posRight,
  title,
  description,
  type,
  duration = 2000,
) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  notification.append(notificationTitle, notificationDescription);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.visibility = 'hidden';
  }, duration);
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
