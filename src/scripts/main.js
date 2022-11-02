'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const body = document.querySelector('body');

  notification.classList.add('notification', type);

  notification.innerHTML = `<h2 class='title'>${title}</h2>
  <p>${description}</p>`;

  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;
  body.appendChild(notification);

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
