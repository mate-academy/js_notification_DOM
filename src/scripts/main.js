'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  // Creating HTML-element of notofication, adding classes and child elements
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
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // Timeout for notificatoon disappearing
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 2000);
};

// Function calls with timeouts
setTimeout(
  pushNotification,
  1000,
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

setTimeout(() => {
  pushNotification(
    150,
    10,
    'Title of Error message',
    'Message example.\n ' +
      'Notification should contain title and description.',
    'error',
  );
}, 2000);

setTimeout(() => {
  pushNotification(
    290,
    10,
    'Title of Warning message',
    'Message example.\n ' +
      'Notification should contain title and description.',
    'warning',
  );
}, 3000);
