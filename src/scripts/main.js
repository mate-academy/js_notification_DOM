'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageWindow = document.createElement('div');

  messageWindow.classList.add('notification', type);

  messageWindow.style.top = `${posTop}px`;
  messageWindow.style.right = `${posRight}px`;

  messageWindow.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description.replace('\n', '<br>')}</p>
  `;

  document.body.append(messageWindow);

  setTimeout(() => {
    messageWindow.remove();
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
