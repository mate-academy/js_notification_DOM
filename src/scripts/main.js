'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Create the notification container element
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  // Set position using the provided coordinates
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // Create and append the title element
  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;
  notification.appendChild(titleElement);

  // Create and append the description element
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;
  notification.appendChild(descriptionElement);

  // Append the notification to the document body
  document.body.appendChild(notification);

  // Hide the notification after 2 seconds
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
