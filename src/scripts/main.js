'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const titleNotification = document.createElement('h2');
  const descriptionNotification = document.createElement('p');
  const notification = document.createElement('div');
  const body = document.querySelector('body');

  titleNotification.textContent = title;
  titleNotification.classList.add('title');

  descriptionNotification.textContent = description;

  notification.classList.add('notification', type);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.appendChild(titleNotification);
  notification.appendChild(descriptionNotification);

  body.appendChild(notification);

  setTimeout(() => {
    notification.style.visibility = 'hidden';
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
