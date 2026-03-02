'use strict';

const pushNotification = (posTop, posLeft, title, description, type) => {
  // 1. Створюємо основний контейнер повідомлення
  const notification = document.createElement('div');

  // 2. Додаємо класи: загальний 'notification' та специфічний для типу
  notification.classList.add('notification', type);

  // 3. Створюємо заголовок h2
  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.textContent = title;
  notification.appendChild(h2);

  // 4. Створюємо опис p
  const p = document.createElement('p');

  p.textContent = description;
  notification.appendChild(p);

  // 5. Встановлюємо стилі позиціонування
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.left = `${posLeft}px`;

  // 6. Додаємо повідомлення до документа (в body)
  document.body.appendChild(notification);

  // 7. Через 2000 мс (2 секунди) приховуємо елемент, не видаляючи його з DOM
  setTimeout(() => {
    notification.style.display = 'none';
    // Також можна використати notification.style.visibility = 'hidden';
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
