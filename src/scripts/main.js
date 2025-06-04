'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notificationDiv = document.createElement('div');

  notificationDiv.classList.add('notification');
  notificationDiv.classList.add(type);

  notificationDiv.style.position = 'absolute';
  notificationDiv.style.top = `${posTop}px`;
  notificationDiv.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  notificationDiv.appendChild(titleElement);
  notificationDiv.appendChild(descriptionElement);

  document.body.appendChild(notificationDiv);

  setTimeout(() => {
    notificationDiv.style.display = 'none';
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
