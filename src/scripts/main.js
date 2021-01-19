'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  document.body.append(notification);
  notification.append(h2);
  notification.append(p);

  h2.textContent = title;
  h2.classList.add('title');

  p.textContent = description;

  notification.classList.add('notification', type);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 1999);
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
