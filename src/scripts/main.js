'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.Right = `${posRight}px`;

  const ttle = document.createElement('h2');

  ttle.classList.add('title');
  ttle.textContent = title;
  notification.append(ttle);

  const notifMsg = document.createElement('p');

  notifMsg.textContent = description;
  notification.append(notifMsg);

  const docmnt = document.querySelector('body');

  docmnt.append(notification);

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
