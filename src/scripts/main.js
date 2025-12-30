'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Create notification container
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // IMPORTANT: overwrite entire style attribute
  notification.setAttribute('style', `top: ${posTop}px; right: ${posRight}px;`);

  // Create title
  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  // Create description
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  // Append elements
  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);
  document.body.appendChild(notification);

  // Hide notification after 2 seconds (do not remove from DOM)
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

// Calls

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
