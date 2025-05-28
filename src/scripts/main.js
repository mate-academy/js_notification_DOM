'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Create notification container
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // Create title element
  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;

  // Create description element
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  // Append title and description to the notification
  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  // Append notification to the document body
  document.body.appendChild(notification);

  // Hide notification after 2 seconds using style visibility
  setTimeout(() => {
    notification.style.visibility = 'hidden';
  }, 4000);
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
