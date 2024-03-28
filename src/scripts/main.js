'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notification.className = 'notification ' + type;
  notification.style.top = posTop.toString() + 'px';
  notification.style.right = posRight.toString() + 'px';
  notificationTitle.className = 'title';
  notificationTitle.textContent = title;
  notificationDescription.textContent = description;

  notification.append(notificationTitle);
  notification.append(notificationDescription);
  document.body.append(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 1999);
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
