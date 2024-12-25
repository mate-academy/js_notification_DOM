'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;

  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notification.style.opacity = '1';
  notification.style.transition = 'opacity 0.8s ease-in';

  const notificationTitle = document.createElement('h2');

  notificationTitle.className = 'title';
  notificationTitle.textContent = title;
  notification.append(notificationTitle);

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;
  notification.append(notificationDescription);

  document.body.append(notification);

  setTimeout(() => {
    notification.style.opacity = '0';

    setTimeout(() => {
      notification.remove();
    }, 2300);
  }, 2200);
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
