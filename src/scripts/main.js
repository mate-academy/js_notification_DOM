'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const page = document.querySelector('body');
  const message = document.createElement('div');

  message.style.cssText = ` margin-top: ${posTop}px; 
    margin-left: ${posRight}px`;

  message.className = `notification ${type}`;

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.textContent = title;
  message.append(messageTitle);

  const messageContent = document.createElement('p');

  messageContent.textContent = description;
  message.append(messageContent);

  page.append(message);

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
