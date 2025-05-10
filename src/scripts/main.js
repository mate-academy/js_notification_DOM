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

  notification.classList.add('notification');

  if (['success', 'error', 'warning'].includes(type)) {
    notification.classList.add(type);
  }

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.innerHTML = title;
  notificationTitle.style.width = 'max-content';
  notification.append(notificationTitle);

  const message = document.createElement('p');

  message.innerHTML = description;
  notification.append(message);

  if (!document.body.contains(notification)) {
    document.body.append(notification);
  }

  setTimeout(() => {
    notification.remove();
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
