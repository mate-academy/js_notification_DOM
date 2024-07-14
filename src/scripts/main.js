'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationText = document.createElement('p');

  notification.classList.add('notification');
  notificationTitle.classList.add('title');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notificationTitle.textContent = title;
  notificationText.textContent = description;

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationText);
  body.appendChild(notification);
  notification.classList.add(type);

  setTimeout(() => {
    notification.style.display = 'none';
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
