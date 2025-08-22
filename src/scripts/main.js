'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Створюємо головний div-елемент для сповіщення
  const notificationElement = document.createElement('div');

  // КРИТИЧНЕ ВИПРАВЛЕННЯ: Явно встановлюємо відображення блоку
  notificationElement.style.display = 'block';

  notificationElement.className = `notification ${type}`;
  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  // Створюємо h2-елемент для заголовка та додаємо текст
  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;

  // Створюємо p-елемент для опису та додаємо текст
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  // Додаємо заголовок та опис до div-елемента сповіщення
  notificationElement.appendChild(titleElement);
  notificationElement.appendChild(descriptionElement);

  // Додаємо сповіщення до body документа
  document.body.appendChild(notificationElement);

  // Приховуємо сповіщення через 2 секунди
  setTimeout(() => {
    notificationElement.style.visibility = 'hidden';
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
