'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  // створюємо контейнер повідомлення
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // заголовок
  const titleEl = document.createElement('h2');

  titleEl.className = 'title';
  titleEl.textContent = title;

  // опис
  const descEl = document.createElement('p');

  descEl.textContent = description;

  notification.appendChild(titleEl);
  notification.appendChild(descEl);

  document.body.appendChild(notification);

  // приховуємо через таймер
  setTimeout(() => {
    notification.style.visibility = 'hidden';
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
