'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const body = document.querySelector('body');

  notification.style.right = posRight + 'px';
  notification.style.top = posTop + 'px';

  notification.style.boxSizing = 'content-box';
  h2.className = 'title';
  h2.textContent = title;
  p.textContent = description;

  notification.classList.add('notification', type);

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

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
