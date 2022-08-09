'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  document.body.children[0].insertAdjacentHTML('afterend', `
  <div class="notification ${type}">
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  </div>
  `);

  const notificationElement = document.querySelector('.notification');

  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  notificationElement.style.boxSizing = 'content-box';

  const remover = () => notificationElement.remove();

  setTimeout(remover, 2000);
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
