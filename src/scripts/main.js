'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  titleElement.classList.add('title');
  titleElement.textContent = title;
  titleElement.style.whiteSpace = `nowrap`;

  descriptionElement.textContent = description;
  descriptionElement.style.whiteSpace = 'pre-line';

  notification.appendChild(titleElement);
  notification.appendChild(descriptionElement);

  document.body.appendChild(notification);

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
