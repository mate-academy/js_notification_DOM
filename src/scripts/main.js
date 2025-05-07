'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const bodyElement = document.querySelector('body');
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationTitle.textContent = title;
  notificationDescription.textContent = description;

  notification.append(notificationTitle, notificationDescription);
  notification.classList.add('notification', type);
  notificationTitle.classList.add('title');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  bodyElement.append(notification);

  setTimeout(() => {
    notification.remove();
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
