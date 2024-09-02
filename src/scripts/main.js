'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;
  notification.appendChild(notificationTitle);

  const notificationParagraf = document.createElement('p');

  notificationParagraf.classList.add('description');
  notificationParagraf.textContent = description;
  notification.appendChild(notificationParagraf);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.visibility = 'hidden';
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
