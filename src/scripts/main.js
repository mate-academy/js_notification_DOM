'use strict';

const root = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');

  messageBlock.classList.add('notification', type);

  messageBlock.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  messageBlock.style.cssText = `
    top: ${[...messageBlock.classList].includes('error')
    ? posTop + 10
    : posTop}px;
    right: ${posRight}px;
  `;

  root.append(messageBlock);

  setTimeout(() => messageBlock.remove(), 2000);
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
