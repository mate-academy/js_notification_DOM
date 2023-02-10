'use strict';

const body = document.body;

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageElement = document.createElement('div');
  const titleElement = document.createElement('h1');

  titleElement.textContent = title;
  titleElement.classList.add('title');
  titleElement.style.fontSize = '18px';
  messageElement.classList.add('notification', type);
  messageElement.style.top = `${posTop}px`;
  messageElement.style.right = `${posRight}px`;

  messageElement.append(titleElement);
  messageElement.append(description);

  body.append(messageElement);
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
