'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Create the notification container
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // Set the position dynamically
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // Create and append the title
  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;
  notification.appendChild(notificationTitle);

  // Create and append the description
  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;
  notification.appendChild(notificationDescription);

  // Append the notification to the document body
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
