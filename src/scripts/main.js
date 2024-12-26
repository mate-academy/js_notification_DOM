'use strict';

document.body.style.position = 'relative';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationMessage = document.createElement('p');

  notification.classList.add('notification', type);
  notificationTitle.textContent = title;
  notificationTitle.className = 'title';
  notificationTitle.style.whiteSpace = 'nowrap';
  notificationMessage.innerHTML = description;
  notificationMessage.style.whiteSpace = 'pre-line';
  notification.appendChild(notificationTitle);
  notification.appendChild(notificationMessage);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
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
