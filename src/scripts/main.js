'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.className = `notification ${type}`;
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  message.style.height = '130px';
  message.style.width = '300px';
  body.append(message);

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.textContent = title;
  messageTitle.style.letterSpacing = '-1.2px';
  message.append(messageTitle);

  const messageDescription = document.createElement('p');

  messageDescription.textContent = description;
  messageDescription.style.margin = '0';
  messageDescription.style.whiteSpace = 'pre-line';
  message.append(messageDescription);

  setTimeout(() => {
    message.remove();
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
