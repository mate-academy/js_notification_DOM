'use strict';

/**
 * Функція для створення та відображення сповіщень.
 */
const pushNotification = (posTop, posRight, title, description, type) => {
  // 1. Створюємо головний контейнер сповіщення
  const notification = document.createElement('div');

  // Додаємо загальний клас та клас типу (напр. notification success)
  notification.classList.add('notification', type);

  // додаємо px до числових значень координат
  // викор. cssText для стабільного порядку властивостей,
  // замість notification.style.cssText = `...`;
  // eslint-disable-next-line prettier/prettier
  notification.setAttribute('style', `top: ${posTop}px; right: ${posRight}px;`);

  // створюємо заголовок h2
  const notificationTitle = document.createElement('h2');
  // дод. обов'язковий клас 'title' згідно з умовою

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  // створюємо опис p
  const notificationDescription = document.createElement('p');

  notificationDescription.classList.add('description');
  // Додаємо клас згідно з чеклистом
  notificationDescription.textContent = description;

  //  додаємо заголовок та опис всередину контейнера
  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  // дод.сповіщення в DOM (в кінець body)
  document.body.appendChild(notification);

  // налашт.автоприховування через 2 секунди
  setTimeout(() => {
    // ховаємо візуально
    notification.style.display = 'none';
  }, 2000);
};

// Викликаємо функцію напряму тричі для тестів
pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n Notification should contain title and description.',
  'warning',
);
