'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.innerText = title;
  h2.className = 'title';
  p.innerText = description;
  notification.appendChild(h2);
  notification.appendChild(p);
  notification.className = `notification ${type}`;
  notification.style.right = posRight + 'px';
  notification.style.top = posTop + 'px';
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(180, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(320, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
