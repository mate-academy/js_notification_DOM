'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBlock = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notificationTitle.classList = 'title';
  notificationTitle.textContent = title;
  notificationDescription.textContent = description;

  notificationBlock.className = `notification ${type}`;
  notificationBlock.append(notificationTitle, notificationDescription);
  notificationBlock.style.top = `${posTop}px`;
  notificationBlock.style.right = `${posRight}px`;

  document.body.prepend(notificationBlock);

  setTimeout(() => {
    notificationBlock.style.display = 'none';
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
