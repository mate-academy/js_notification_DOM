'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.style.padding = '10px';
  notification.style.borderRadius = '5px';
  notification.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.2)';
  notification.style.width = '250px';

  // eslint-disable-next-line max-len
  notification.style.backgroundColor =
    type === 'success' ? 'green' : type === 'error' ? 'red' : 'orange';
  notification.style.color = '#fff';

  const notificationTitle = document.createElement('h2');

  notificationTitle.className = 'title';
  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 2000);
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
