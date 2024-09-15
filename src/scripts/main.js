'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // Create the notification container
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  // Set position (top and right)
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // Create the title element (h2)
  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  titleElement.style.whiteSpace = 'nowrap';
  titleElement.style.overflow = 'hidden';
  titleElement.style.textOverflow = 'ellipsis';

  // Create the description element (p)
  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  // Append title and description to the notification
  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  // Append notification to the body
  document.body.appendChild(notification);

  // Remove notification after 2 seconds
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
