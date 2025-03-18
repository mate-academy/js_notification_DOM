'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationEl = document.createElement('div');
  const titleEl = document.createElement('h2');
  const descriptionEl = document.createElement('p');

  notificationEl.className = 'notification ' + type;
  notificationEl.style.top = posTop + 'px';
  notificationEl.style.right = posRight + 'px';
  titleEl.className = 'title';
  titleEl.textContent = title;
  descriptionEl.textContent = description;

  notificationEl.append(titleEl);
  notificationEl.append(descriptionEl);
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
