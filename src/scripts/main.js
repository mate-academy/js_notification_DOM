'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;
  notification.append(titleElement);

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;
  notification.append(notificationDescription);

  const topValue = typeof posTop === 'number' ? `${posTop}px` : posTop;
  const rightValue = typeof posRight === 'number' ? `${posRight}px` : posRight;

  notification.setAttribute('style', `top: ${topValue}; right: ${rightValue};`);
  document.body.append(notification);

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
