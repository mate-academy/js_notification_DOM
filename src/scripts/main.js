'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titltElement = document.createElement('h2');
  const paragraphElement = document.createElement('p');

  titltElement.classList.add('title');
  notification.classList.add('notification', type);

  titltElement.textContent = title;
  paragraphElement.textContent = description;

  notification.appendChild(titltElement);
  notification.appendChild(paragraphElement);

  notification.style.position = 'fixed';
  notification.style.right = posRight + 'px';
  notification.style.top = posTop + 'px';

  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
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
