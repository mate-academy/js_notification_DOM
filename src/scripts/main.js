'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationTitle.innerText = title;
  notificationTitle.classList.add('title');

  notificationDescription.innerText = description;

  body.appendChild(notification);
  setTimeout(() => (notification.style.visibility = 'hidden'), 2000);

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
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
