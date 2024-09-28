'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const titleElem = document.createElement('h2');

  titleElem.className = 'title';
  titleElem.textContent = title;

  const text = document.createElement('p');

  text.className = 'message';
  text.textContent = description;

  notification.appendChild(titleElem);
  notification.appendChild(text);

  document.body.appendChild(notification);

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
