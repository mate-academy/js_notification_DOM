'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  body.style = 'position: relative;';

  const messageBlock = document.createElement('div');

  messageBlock.classList.add('notification', type);

  messageBlock.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  messageBlock.style = `top: ${posTop}px; right: ${posRight}px`;

  body.append(messageBlock);

  setTimeout(() => {
    messageBlock.remove();
  }, 2000);
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
