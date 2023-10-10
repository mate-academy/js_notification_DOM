'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = title;
  h2.classList.add('title');

  p.textContent = description;
  p.style.margin = '0px';

  notification.classList.add('notification', `${type}`);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.appendChild(h2);
  notification.appendChild(p);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.parentNode.removeChild(notification);
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
