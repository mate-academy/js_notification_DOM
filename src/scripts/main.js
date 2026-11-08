'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleElement = document.createElement('h2');
  const pElement = document.createElement('p');

  titleElement.textContent = title;
  pElement.textContent = description;
  notification.classList.add('notification', type);
  titleElement.classList.add('title');
  document.body.append(notification);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.append(titleElement);
  notification.append(pElement);

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
