'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = 'notification';
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  const notTitle = document.createElement('h2');

  notTitle.className = 'title';
  notTitle.textContent = title;

  const notContent = document.createElement('p');

  notContent.textContent = description;

  notification.appendChild(notTitle);
  notification.appendChild(notContent);

  notification.classList.add(type);

  document.body.appendChild(notification);

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
