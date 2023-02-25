'use strict';

const htmlBody = document.body;

const pushNotification = (posTop, posRight, title, description, type) => {
  const errorBlock = document.createElement('div');

  errorBlock.classList.add('notification', type);
  errorBlock.style.top = `${posTop}px`;
  errorBlock.style.right = `${posRight}px`;
  errorBlock.innerHTML
  = `
  <h2 class = 'title'>${title}</h2>
  <p>${description}</p>
  `;

  htmlBody.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
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
