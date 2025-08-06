'use strict';

const NOTIFICATION_TIMEOUT = 2000;

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const $notification = document.createElement('div');
  const $notificationTitle = document.createElement('h2');
  const $notificationText = document.createElement('p');

  $notification.className = `notification ${type}`;
  $notification.style.top = `${posTop}px`;
  $notification.style.right = `${posRight}px`;

  $notificationTitle.className = 'title';
  $notificationTitle.textContent = title;
  $notificationText.textContent = description;

  $notification.appendChild($notificationTitle);
  $notification.appendChild($notificationText);

  document.body.appendChild($notification);

  setTimeout(() => {
    $notification.hidden = true;
  }, NOTIFICATION_TIMEOUT);
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
