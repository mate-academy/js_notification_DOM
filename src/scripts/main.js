'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBox = document.createElement('div');

  notificationBox.classList.add('notification', type);

  notificationBox.style.top = posTop + 'px';
  notificationBox.style.right = posRight + 'px';

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.innerText = title;

  const descElement = document.createElement('p');

  descElement.innerText = description;

  notificationBox.appendChild(titleElement);
  notificationBox.appendChild(descElement);

  document.body.appendChild(notificationBox);

  setTimeout(() => {
    notificationBox.style.display = 'none';
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
