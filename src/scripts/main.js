'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const divBlock = document.createElement('div');
  const body = document.querySelector('body');

  divBlock.className = `notification ${type}`;
  divBlock.style.cssText = `top: ${posTop}px; right: ${posRight}px;`;

  divBlock.innerHTML = `
    <h2 class = "title">${title}</h2>
    <p>${description}</p>
  `;
  body.prepend(divBlock);

  setTimeout(() => divBlock.remove(), 2000);
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
