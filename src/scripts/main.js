'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationMsg = document.createElement('p');

  notification.className = 'notification ' + type;
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  notificationTitle.className = 'title';
  notificationTitle.innerHTML = title;
  notificationTitle.style.fontSize = '18px';
  notificationMsg.innerHTML = description;

  notification.append(notificationTitle);
  notification.append(notificationMsg);

  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.<br> '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.<br> '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.<br> '
  + 'Notification should contain title and description.', 'warning');
