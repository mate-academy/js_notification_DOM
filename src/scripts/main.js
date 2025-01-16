'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // Створюємо заголовок повідомлення
  const notificationTitle = document.createElement('div');

  notificationTitle.classList.add('notification-title');
  notificationTitle.innerText = title;

  const notificationDescription = document.createElement('div');

  notificationDescription.classList.add('notification-description');
  notificationDescription.innerText = description;

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
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
