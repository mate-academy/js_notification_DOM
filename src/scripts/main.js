'use strict';

const NOTIFICATION_TIMEOUT = 2;

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBlock = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notificationBlock.className = 'notification' + ' ' + type;
  notificationBlock.style.top = posTop + 'px';
  notificationBlock.style.right = posRight + 'px';

  descriptionElement.textContent = description;
  titleElement.textContent = title;
  titleElement.className = 'title';

  notificationBlock.appendChild(titleElement);
  notificationBlock.appendChild(descriptionElement);

  document.body.appendChild(notificationBlock);

  setTimeout(() => {
    notificationBlock.style.display = 'none';
  }, NOTIFICATION_TIMEOUT * 1000);
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
