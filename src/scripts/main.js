'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notification.setAttribute('class', `notification ${type}`);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notificationTitle.setAttribute('class', 'title');
  notificationTitle.textContent = title;

  notificationDescription.textContent = description;

  notification.append(notificationTitle);
  notification.append(notificationDescription);
  document.body.append(notification);

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
  161.19,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  284.38,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
