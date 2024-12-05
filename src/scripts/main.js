'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  // Creating HTML-element of notification, adding classes and child elements
  document.body.appendChild(notification);

  notification.classList.add('notification', type);

  const notificationHeader = document.createElement('h2');

  notificationHeader.textContent = title;
  notificationHeader.className = 'title';
  notification.appendChild(notificationHeader);

  const notificationMessage = document.createElement('p');

  notificationMessage.textContent = description;

  notification.appendChild(notificationMessage);

  // Positioning of the notification element
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // Timeout for notification disappearing
  setTimeout(() => {
    notification.style.display = `none`;
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
