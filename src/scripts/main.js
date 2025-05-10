'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  // Створити контейнер div для повідомлень.
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.position = 'absolute';
  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;

  // Створити заголовок
  const notificationTitle = document.createElement('h2');

  notificationTitle.className = 'title';
  notificationTitle.textContent = title;

  // Створити опис
  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  // Вставити заголовок і опис в контейнер повідомлення
  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  // Вставити повідомлення в body
  document.body.appendChild(notification);

  // Видалити повідомлення через 2 секунди

  setTimeout(() => {
    document.body.removeChild(notification);
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
