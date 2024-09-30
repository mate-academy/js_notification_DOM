'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notificationBody = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationBody.classList.add('notification', type);
  notificationTitle.classList.add(`title`);

  notificationTitle.textContent = title;
  notificationDescription.textContent = description;

  notificationBody.style.position = 'absolute';
  notificationBody.style.top = `${posTop}px`;
  notificationBody.style.right = `${posRight}px`;

  body.prepend(notificationBody);
  notificationBody.prepend(notificationTitle);
  notificationBody.append(notificationDescription);

  setTimeout(() => {
    notificationBody.remove();
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
  160,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  280,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
