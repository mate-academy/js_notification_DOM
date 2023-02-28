'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationBlock = document.createElement('div');

  notificationBlock.classList.add('notification', type);
  notificationBlock.style.top = `${posTop}px`;
  notificationBlock.style.right = `${posRight}px`;

  notificationBlock.innerHTML
  = `
  <h2 class='title'>${title}</h2>
  <p>${description}</p>
  `;

  document.body.append(notificationBlock);

  setTimeout(() => {
    notificationBlock.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(164, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
