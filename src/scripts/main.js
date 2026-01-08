'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;
  const notificationContainer = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notificationContainer.classList.add('notification', type);
  notificationContainer.appendChild(titleElement);
  notificationContainer.appendChild(descriptionElement);
  notificationContainer.style.top = `${posTop}px`;
  notificationContainer.style.right = `${posRight}px`;
  titleElement.classList.add('title');
  titleElement.textContent = title;
  descriptionElement.textContent = description;
  body.appendChild(notificationContainer);
  setTimeout(() => (notificationContainer.style.display = 'none'), 2000);
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
