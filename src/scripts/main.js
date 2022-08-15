'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDescription = document.createElement('p');

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  notification.classList.add('notification', `${type}`);

  notificationTitle.textContent = title;
  notificationTitle.classList.add('title');

  notificationDescription.textContent = description;

  document.body.append(notification);
  notification.append(notificationTitle);
  notification.append(notificationDescription);

  setTimeout(() => {
    notification.remove();
  }, 2000);
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
