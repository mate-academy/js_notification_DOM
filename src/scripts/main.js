'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBlock = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationBlock.classList.add('notification', type, `notification-${type}`);
  notificationBlock.style.top = posTop + 'px';
  notificationBlock.style.right = posRight + 'px';

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  notificationDescription.textContent = description;

  notificationBlock.appendChild(notificationTitle);
  notificationBlock.appendChild(notificationDescription);

  document.body.appendChild(notificationBlock);

  const HIDE_DELAY_MS = 2000;

  setTimeout(() => {
    notificationBlock.style.visibility = 'hidden';
  }, HIDE_DELAY_MS);
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
