'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Создаем главный блок
  const notificationBlock = document.createElement('div');

  // Добавляем базовый класс и тип
  notificationBlock.classList.add('notification', type);

  // Устанавливаем координаты
  notificationBlock.style.top = `${posTop}px`;
  notificationBlock.style.right = `${posRight}px`;

  // Создаем заголовок h2
  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  // Создаем описание p
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  // Собираем структуру вместе
  notificationBlock.append(titleElement, descriptionElement);

  // Добавляем элемент в body
  document.body.append(notificationBlock);

  // Скрываем через 2 секунды без удаления
  setTimeout(() => {
    notificationBlock.style.display = 'none';
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
