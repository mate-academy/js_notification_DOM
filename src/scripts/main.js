'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const notifTitle = document.createElement('h2');

  notifTitle.classList.add('title');

  notifTitle.innerHTML = title;
  notification.appendChild(notifTitle);

  const notifText = document.createElement('p');

  notifText.innerHTML = description;
  notification.appendChild(notifText);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.<br>Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.<br>Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.<br>Notification should contain title and description.',
  'warning',
);
