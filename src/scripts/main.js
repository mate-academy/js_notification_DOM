'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  const standartClassName = 'notification';

  notification.classList.add(standartClassName, type);

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notificationTitle.style.fontStyle = 'normal';

  notification.append(notificationTitle, notificationDescription);
  notificationTitle.className = 'title';

  notificationTitle.innerText = title;

  notificationDescription.innerText = description;

  body.append(notification);

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
