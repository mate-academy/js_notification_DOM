'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const content = `
  <h2 class="title">${title}</h2>
  <p>${description}</p>
  `;

  message.classList.add('notification', type);
  message.innerHTML = content;
  message.style = `top: ${posTop}px; rigth: ${posRight}px`;
  document.body.append(message);
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
