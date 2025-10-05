'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');

  notificationElement.classList.add('notification', type);

  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  const titleElem = document.createElement('h1');

  titleElem.classList.add('title');
  titleElem.textContent = title;

  const descriptElem = document.createElement('p');

  descriptElem.textContent = description;

  notificationElement.appendChild(titleElem);
  notificationElement.appendChild(descriptElem);
  document.body.appendChild(notificationElement);

  setTimeout(() => {
    notificationElement.style.display = 'none';
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
