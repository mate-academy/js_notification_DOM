'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescr = document.createElement('p');

  notification.classList.add('notification', type);
  notificationTitle.classList.add('title');

  notificationTitle.textContent = title;
  notificationDescr.textContent = description;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.append(notificationTitle, notificationDescr);
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.hidden = true;
  }, 2000)
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\nNotification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\nNotification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\nNotification should contain title and description.',
  'warning',
);
