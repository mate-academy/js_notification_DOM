'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h3');
  const notificationDescription = document.createElement('p');

  notification.classList.add('notification', type);
  notificationTitle.classList.add('title');

  notificationTitle.innerText = title;
  notificationDescription.innerText = description;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notificationTitle.style.whiteSpace = 'nowrap';

  notification.append(notificationTitle, notificationDescription);
  document.body.append(notification);

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
