'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const textDescription = document.createElement('p');

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  message.className = `notification ${type}`;
  messageTitle.className = 'title';
  messageTitle.textContent = `${title}`;
  textDescription.textContent = `${description}`;

  document.body.append(message);
  message.append(messageTitle, textDescription);

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
