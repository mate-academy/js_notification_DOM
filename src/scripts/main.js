'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.style.position = 'absolute';
  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;

  const titleText = document.createElement('h2');

  titleText.classList.add('title');
  titleText.textContent = title;

  const descriptions = document.createElement('p');

  descriptions.textContent = description;

  notification.appendChild(titleText);
  notification.appendChild(descriptions);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.behavior = 'smooth';
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
