'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  let notification = document.createElement('div');
  const body = document.querySelector('body');

  notification.classList.add('notification', type);

  notification.innerHTML += `
    <h2 class="title">${title}</h2>
    <p class="description">${description}</p>
  `;

  body.append(notification);

  // to style notification
  notification = document.querySelector(`.${type}`);

  notification.style.cssText = `
    box-sizing: content-box;;
    right: ${posRight}px;
    top: ${posTop}px;
  `;
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
