'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  /** div */
  const notification = document.createElement('div');

  notification.classList.add('notification', type);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  /** h2 */
  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  /** p */
  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  notification.append(notificationTitle, notificationDescription);

  /** DOM */
  document.body.append(notification);

  /** таймер 2 сек. */
  setTimeout(() => {
    notification.style.display = 'none';
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
