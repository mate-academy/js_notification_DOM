'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Крок 1: Створення основного елемента
  const notificationElement = document.createElement('div');

  // Крок 2: Додавання CSS-класів
  notificationElement.classList.add('notification', type);

  // Крок 3: Створення та наповнення внутрішніх елементів
  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title; // Правильне присвоєння тексту

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  // Крок 4: Вкладання внутрішніх елементів у головний
  notificationElement.appendChild(titleElement);
  notificationElement.appendChild(descriptionElement);

  // Крок 5: Позиціонування елемента
  notificationElement.style.top = posTop + 'px'; // Прав
  notificationElement.style.right = posRight + 'px'; // Прав

  // Крок 6: Додавання елемента на сторінку
  document.body.appendChild(notificationElement);

  // Крок 7: Видалення сповіщення через 2 секунди
  setTimeout(() => {
    notificationElement.remove();
  }, 2000); // Правильна затримка 2000 мс
};

// Існуючі виклики функції для тестування
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
