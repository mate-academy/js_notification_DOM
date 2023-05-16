'use strict';

const pushNotification = (posTop, posRight, title, description, type = '') => {
  const notificationEl = document.createElement('div');

  notificationEl.className = `notification ${type}`;

  notificationEl.style.top = `${posTop}px`;
  notificationEl.style.right = `${posRight}px`;

  notificationEl.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  document.body.append(notificationEl);

  setTimeout(() => notificationEl.remove(), 2000);
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
