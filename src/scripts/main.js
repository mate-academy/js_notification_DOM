'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // позиція
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // заголовок
  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.textContent = title;

  // опис
  const descEl = document.createElement('p');

  descEl.textContent = description;

  // додаємо елементи в контейнер
  notification.append(titleEl, descEl);

  // додаємо в DOM
  document.body.appendChild(notification);

  // через 2 секунди ховаємо (НЕ видаляємо!)
  setTimeout(() => {
    notification.style.display = 'none';
    // або:
    // notification.style.visibility = 'hidden';
  }, 2000);
  // write code here
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
