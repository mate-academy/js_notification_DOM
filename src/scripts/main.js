'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(type);

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.append(title);

  const p = document.createElement('p');

  p.append(description);

  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';

  body.append(notification);
  notification.append(h2);
  notification.append(p);

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
