'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);

  const element = document.createElement('h2');

  element.classList.add('title');
  element.textContent = title;

  const message = document.createElement('p');

  message.classList.add('description');
  message.textContent = description;

  notification.appendChild(element);
  notification.appendChild(message);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

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
