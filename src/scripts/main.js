'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  const titleEl = document.createElement('h2');

  titleEl.className = 'title';
  titleEl.textContent = title;

  const descEl = document.createElement('p');

  descEl.textContent = description;

  notification.append(titleEl, descEl);

  notification.style.position = 'absolute';
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
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
