'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationDesc = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(type);
  notificationTitle.textContent = title;
  notificationDesc.innerText = description;
  notification.append(notificationTitle);
  notification.append(notificationDesc);
  body.append(notification);
  notification.style.right = posRight + 'px';
  notification.style.top = posTop + 'px';
  notification.style.boxSizing = 'content-box';

  setTimeout(() => {
    notification.remove();
  }, 10000);
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
