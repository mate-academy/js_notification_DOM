'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Create the notification element
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // Create the title element
  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  // Create the description element
  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  // Append title and description to the notification
  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  // Set the position of the notification
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // Append the notification to the body
  document.body.appendChild(notification);

  // Hide the notification after 2 seconds
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

// Example usage
pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\nNotification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\nNotification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\nNotification should contain title and description.',
  'warning',
);
