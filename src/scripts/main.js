'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // 1. Створюємо елемент для сповіщення
  const notification = document.createElement('div');

  // 2. Додаємо класи до сповіщення
  notification.classList.add('notification', type);

  // 3. Додаємо стилі для позиціонування
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // 4. Створюємо заголовок (h2) і додаємо текст
  const titleElement = document.createElement('h2');
  titleElement.classList.add('title');
  titleElement.textContent = title;

  // 5. Створюємо опис (p) і додаємо текст
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  // 6. Додаємо заголовок і опис у сповіщення
  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  // 7. Додаємо сповіщення до документа
  document.body.appendChild(notification);

  // 8. Видаляємо сповіщення через 2 секунди
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
