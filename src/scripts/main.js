'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');

  const notificationDescription = document.createElement('p');

  notificationTitle.textContent = title;
  notificationDescription.textContent = description;

  notification.style.cssText = `
    top: ${posTop}px;
    right: ${posRight}px;
  `;

  switch (type) {
    case 'success':
      notification.classList.add('success');
      break;
    case 'error':
      notification.classList.add('error');
      break;
    case 'warning':
      notification.classList.add('warning');
      break;
  }
  document.body.style.position = 'relative';
  document.body.append(notification);
  notification.append(notificationTitle);
  notification.append(notificationDescription);

  setTimeout(() => {
    notification.style.visibility = 'hidden';
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
