'use strict';

const pageBody = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notificationElement.classList.add('notification', type);
  titleElement.classList.add('title');

  notificationElement.style.position = 'absolute';
  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  titleElement.textContent = title;
  descriptionElement.textContent = description;

  notificationElement.appendChild(titleElement);
  notificationElement.appendChild(descriptionElement);
  pageBody.appendChild(notificationElement);

  setTimeout(() => {
    notificationElement.hidden = true;
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
