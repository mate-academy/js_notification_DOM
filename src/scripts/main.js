'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Create the main notification element
  const notification = document.createElement('div');

  // Add required classes: 'notification' + type class
  notification.classList.add('notification', type);

  // Set only the positioning styles (no visual styling allowed)
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // Create title element (h2 with 'title' class)
  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  // Create description element (p tag)
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  // Append title and description to notification
  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  // Append notification to document body
  document.body.appendChild(notification);

  // Hide the notification after 2 seconds (don't remove from DOM)
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

// Test calls for success, error, and warning notifications
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
