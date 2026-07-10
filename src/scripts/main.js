'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.position = 'fixed';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const heading = document.createElement('h2');
  const descriptionOne = document.createElement('p');

  heading.className = `title`;
  heading.textContent = `${title}`;
  descriptionOne.textContent = `${description}`;

  notification.appendChild(heading);
  notification.appendChild(descriptionOne);

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
