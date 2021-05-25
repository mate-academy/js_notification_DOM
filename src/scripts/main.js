'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const notificationBlock = document.createElement('div');
  const titleNotification = document.createElement('h2');
  const messageNotification = document.createElement('p');

  notificationBlock.className = `notification + ${type}`;
  notificationBlock.style.top = `${posTop}px`;
  notificationBlock.style.right = `${posRight}px`;

  titleNotification.className = 'title';
  titleNotification.textContent = `${title}`;
  messageNotification.innerText = `${description}`;

  notificationBlock.append(titleNotification);
  notificationBlock.append(messageNotification);

  body.append(notificationBlock);

  setTimeout(() => notificationBlock.remove(), 2000);
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
