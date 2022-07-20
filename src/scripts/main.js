'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const messageInfo = document.createElement('div');

  messageInfo.style.top = `${posTop}px`;
  messageInfo.style.right = `${posRight}px`;
  messageInfo.className = `notification ${type}`;

  messageInfo.insertAdjacentHTML('afterbegin', `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `);

  body.append(messageInfo);

  setTimeout(() => {
    messageInfo.remove();
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
