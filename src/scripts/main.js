'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const header = document.createElement('h2');
  const content = document.createElement('p');
  const body = document.body;

  header.innerText = title;
  header.className = 'title';
  content.innerText = description;
  notification.append(header);
  notification.append(content);
  notification.style.right = `${posRight}px`;
  notification.style.top = `${posTop}px`;
  notification.className = `notification ${type}`;
  body.prepend(notification);

  setTimeout(() => body.removeChild(notification), 2000);
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
