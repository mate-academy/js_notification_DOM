'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.innerHTML = `
    <h1 class="title">${title}</h1>
    <p>${description}</p>
  `;

  document.body.append(notification);

  notification.style.cssText = `
  top: ${posTop}px;
  right: ${posRight}px;
  `;

  notification.classList.add('notification', type);
};

pushNotification(20, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(170, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
