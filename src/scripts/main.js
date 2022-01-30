'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationContent = document.createElement('p');

  notificationTitle.innerText = title;
  notificationTitle.className = 'title';
  notificationTitle.style.fontSize = '18px';
  notificationContent.innerText = description;
  notification.append(notificationTitle, notificationContent);
  notification.classList.add('notification', type);
  notification.style.cssText = `top : ${posTop}px; right: ${posRight}px;`;
  document.body.append(notification);
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
