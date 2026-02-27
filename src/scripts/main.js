'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('DIV');

  notification.className = 'notification ' + type;

  notification.style.cssText = `
    top: ${posTop}px;
    right: ${posRight}px;
  `;
  // or do it with a document.styleSheets.

  const notificationTitle = document.createElement('H2');

  notificationTitle.textContent = title;
  notificationTitle.className = 'title';
  notification.append(notificationTitle);

  const notificationMessage = document.createElement('P');

  notificationMessage.textContent = description;
  notification.append(notificationMessage);

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
