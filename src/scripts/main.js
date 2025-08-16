'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notificationBlock = document.createElement('div');

  notificationBlock.classList.add('notification', type);

  notificationBlock.style.position = 'absolute';
  notificationBlock.style.right = `${posRight}px`;
  notificationBlock.style.top = `${posTop}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  notificationBlock.appendChild(notificationTitle);
  notificationBlock.appendChild(notificationDescription);

  document.body.appendChild(notificationBlock);

  setTimeout(() => {
    notificationBlock.remove();
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
