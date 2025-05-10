'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // створюю контейнер повідомлення
  const notification = document.createElement('div');
  // додаю клас notification і типу (success, error, warning)

  notification.classList.add('notification', type);

  // встановлення координат
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // додаю заголовок
  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;
  notification.appendChild(titleElement);

  // додаю опис
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;
  notification.appendChild(descriptionElement);

  // додаю елемент до документа
  document.body.appendChild(notification);

  // видалення елемента через 2 с
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
