'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  // додаємо класи до елементів повідомлення залежно від типу
  notification.classList.add('notification', type);
  notificationTitle.classList.add('title');

  // встановлюємо заголовок і опис
  notificationTitle.textContent = title;
  notificationDescription.textContent = description;

  // додаємо елементи до повідомлення
  notification.append(notificationTitle);
  notification.append(notificationDescription);

  // встановлюємо позицію повідомлення
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // додаємо повідомлення до сторінки
  document.body.append(notification);

  // видаляємо повідомлення через 2 секунди
  setTimeout(() => notification.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
