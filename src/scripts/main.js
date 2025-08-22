'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // створюємо контейнер для повідомлення
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // позиціонуємо елемент
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // створюємо заголовок
  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  // створюємо опис
  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  // додаємо елементи у повідомлення
  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  // додаємо повідомлення у DOM
  document.body.appendChild(notification);

  // приховуємо повідомлення через 2 секунди
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
