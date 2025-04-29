'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBody = document.createElement('div');

  notificationBody.classList.add('notification');
  notificationBody.classList.add(type);
  notificationBody.style.top = `${posTop}px`;
  notificationBody.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  notificationBody.appendChild(notificationTitle);
  notificationBody.appendChild(notificationDescription);

  document.body.appendChild(notificationBody);

  setTimeout(() => {
    notificationBody.style.display = 'none';
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
