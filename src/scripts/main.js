'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  document.querySelector('body').insertAdjacentHTML('afterbegin',
    `<div class="notification ${type}">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
    `);

  const message = document.querySelector(`.${type}`);

  message.style = `top: ${posTop}px; right: ${posRight}px;`;

  setTimeout(() => message.remove(), 2000);
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
