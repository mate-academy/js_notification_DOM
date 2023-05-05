'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification');
  message.classList.add(type);

  message.innerHTML += `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  message.style.cssText
  = ` top: ${posTop}px; right: ${posRight};`;

  document.body.append(message);

  setTimeout(() => {
    message.style.cssText += `display: none`;
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(165, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
