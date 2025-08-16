'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDesc = document.createElement('p');

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.classList.add('notification', type);
  messageTitle.className = 'title';
  messageTitle.innerHTML = title;
  notification.append(messageTitle);

  messageDesc.innerHTML = description;
  notification.append(messageDesc);

  document.body.prepend(notification);

  setTimeout(() => (notification.style.display = 'none'), 2000);
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
