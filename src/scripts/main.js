'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationParagraph = document.createElement('p');

  notification.classList.add('notification', type);
  notification.style.position = 'absolute';

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notificationTitle.classList.add('title');
  notificationTitle.innerText = title;

  notificationParagraph.innerText = description;

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationParagraph);

  document.body.appendChild(notification);

  setTimeout(() => {
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
