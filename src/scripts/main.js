'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const headTitle = document.createElement('h2');

  headTitle.textContent = title;

  const text = document.createElement('p');

  text.textContent = description;

  const notificationAlert = document.createElement('div');

  notificationAlert.classList.add('notification', type);
  notificationAlert.style.position = 'fixed';
  notificationAlert.style.top = posTop + 'px';
  notificationAlert.style.right = posRight + 'px';

  notificationAlert.append(headTitle);
  notificationAlert.append(text);

  document.body.appendChild(notificationAlert);

  setTimeout(() => {
    notificationAlert.style.display = 'none';
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
