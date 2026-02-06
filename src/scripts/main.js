'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationEl = document.createElement('div');

  notificationEl.classList.add('notification', type);

  notificationEl.style.position = 'absolute';
  notificationEl.style.top = posTop + 'px';
  notificationEl.style.right = posRight + 'px';

  const messageTitle = document.createElement('h2');

  messageTitle.classList.add('title');
  messageTitle.textContent = title;

  const warnDescription = document.createElement('p');

  warnDescription.textContent = description;

  notificationEl.append(messageTitle, warnDescription);
  document.body.append(notificationEl);

  setTimeout(() => {
    notificationEl.style.display = 'none';
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
