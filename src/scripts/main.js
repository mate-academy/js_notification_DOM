'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationEl = document.createElement('div');
  const name = document.createElement('h2');
  const body = document.createElement('p');

  notificationEl.className = 'notification ' + type;
  
  name.textContent = title;
  name.className = 'title';
  body.textContent = description;
  notificationEl.append(name);
  notificationEl.append(body);

  notificationEl.style.position = 'fixed';
  notificationEl.style.top = `${posTop}px`;
  notificationEl.style.right = `${posRight}px`;

  document.body.append(notificationEl);

  setTimeout(() => {
    document.body.removeChild(notificationEl);
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
