'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const messageBlock = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  messageBlock.className = `notification ${type}`;
  messageBlock.style.top = `${posTop}px`;
  messageBlock.style.right = `${posRight}px`;
  body.append(messageBlock);

  messageTitle.className = 'title';
  messageTitle.innerHTML = `${title}`;
  messageBlock.append(messageTitle);

  messageDescription.innerHTML = `${description}`;
  messageBlock.append(messageDescription);

  setTimeout(() => messageBlock.remove(), 1000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example. <br>'
  + 'Notification should contain title and description.', 'warning');
