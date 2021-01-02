'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;

  message.insertAdjacentHTML('afterbegin', `
    <h2 class=title>${title}</h2>
    <p>${description}</p>
  `);

  message.style.cssText = `
    top: ${posTop}px;
    right:${posRight}px;
  `;

  document.querySelector('body').append(message);

  function removing() {
    message.remove();
  }

  setTimeout(removing, 2000);
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
