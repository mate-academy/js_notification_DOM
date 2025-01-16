'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  // Set the position of the notification
  notification.style.position = 'absolute';
  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;

  // Create the title element
  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;

  // Create the description element
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  // Append title and description to the notification
  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  // Append the notification to the document body
  document.body.appendChild(notification);

  // Remove the notification after 2 seconds
  setTimeout(() => {
    notification.remove();
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
