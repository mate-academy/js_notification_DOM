'use strict';

const createNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.position = 'fixed';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.className = 'title';
  titleElement.textContent = title;
  notification.appendChild(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;
  notification.appendChild(descriptionElement);

  return notification;
};

const showNotification = (notification, duration) => {
  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, duration);
};

const pushNotification = (
  posTop,
  posRight,
  title,
  description,
  type,
  duration = 2000,
) => {
  const notification = createNotification(
    posTop,
    posRight,
    title,
    description,
    type,
  );

  showNotification(notification, duration);
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
