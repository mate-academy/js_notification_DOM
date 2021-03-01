'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, decriptionText, type) => {
  const notification = document.createElement('div');
  const header = document.createElement('h2');
  const description = document.createElement('p');

  notification.classList.add('notification', `${type}`);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  header.className = 'title';
  header.textContent = title;
  description.innerText = decriptionText;

  notification.append(header);
  notification.append(description);

  body.append(notification);

  setTimeout(() => notification.remove(), 2000);
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
