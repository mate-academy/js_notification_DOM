'use strict';

const pushNotification = (posTop, posRight = 10, title, description, type) => {
  // 1 - Создаем контейнер уведомления
  const element = document.createElement('div');

  element.classList.add('notification', type);

  // 2 - Создаем заголовок

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.innerText = title;

  // 3 - Создаем описание description

  const descElement = document.createElement('p');

  descElement.innerText = description;

  // 4 - Добавляем в контейнер

  element.appendChild(titleElement);
  element.appendChild(descElement);

  // 5 - Устанавливаем позицию

  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  // 6 - Добавляем в документ Элемент(к бади)
  document.body.appendChild(element);

  // Прячем уведомление через 2 секунды
  setTimeout(() => {
    element.style.display = 'none';
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
