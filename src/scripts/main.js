'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const body = document.body;
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  notification.className = 'notification';
  notification.classList.add(type);
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  h2.textContent = title;
  p.textContent = description;
  notification.append(h2);
  notification.append(p);
  body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(160, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
