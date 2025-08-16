'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationText = document.createElement('p');

  notification.className = 'notification';
  notificationTitle.className = 'title';

  notificationTitle.textContent = title;
  notificationText.textContent = description;

  if (['success', 'error', 'warning'].includes(type)) {
    notification.classList.add(type);
  }

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  notification.prepend(notificationTitle);
  notification.append(notificationText);

  document.body.append(notification);
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
