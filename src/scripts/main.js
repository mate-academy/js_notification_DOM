'use strict';

const pushNotification = (x, y, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);

  notification.style.position = 'absolute';
  notification.style.right = '20px';

  notification.style.width = '320px';
  notification.style.minHeight = '120px';
  notification.style.boxSizing = 'border-box';
  notification.style.padding = '15px';

  const notificationHeight = 140;
  const marginSpace = 20;
  let positionIndex = 0;

  if (type === 'success') {
    positionIndex = 0;
  } else if (type === 'error') {
    positionIndex = 1;
  } else if (type === 'warning') {
    positionIndex = 2;
  }

  notification.style.top = `${20 + positionIndex * (notificationHeight + marginSpace)}px`;

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;
  notification.appendChild(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;
  notification.appendChild(descriptionElement);

  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
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
