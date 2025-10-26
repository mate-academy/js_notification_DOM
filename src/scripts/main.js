'use strict';

const pushNotification = (coordinates, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.setAttribute(
    'style',
    `top: ${coordinates.top}px; right: ${coordinates.right}px;`,
  );

  const titleFirst = document.createElement('h2');

  titleFirst.className = 'title';
  titleFirst.textContent = title;

  const descriptionFirst = document.createElement('p');

  descriptionFirst.textContent = description;

  notification.append(titleFirst, descriptionFirst);
  document.body.append(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

pushNotification(
  { top: 10, right: 10 },
  'Title of Success message',
  'Message example.\n Notification should contain title and description.',
  'success',
);

pushNotification(
  { top: 150, right: 10 },
  'Title of Error message',
  'Message example.\n Notification should contain title and description.',
  'error',
);

pushNotification(
  { top: 290, right: 10 },
  'Title of Warning message',
  'Message example.\n Notification should contain title and description.',
  'warning',
);
