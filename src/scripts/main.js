'use strict';

const pushNotification = (x, y, title, description, type) => {
  // Створюємо контейнер для повідомлення
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // Додаємо заголовок
  const titleElement = document.createElement('h4');

  titleElement.textContent = title;
  notification.appendChild(titleElement);

  // Додаємо опис
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;
  notification.appendChild(descriptionElement);

  // Додаємо повідомлення до документа
  document.body.appendChild(notification);

  // Видаляємо повідомлення з DOM через 2 секунди
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
