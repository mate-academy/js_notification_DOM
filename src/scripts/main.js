'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');

  messageBlock.classList.add('notification', `${type}`);
  messageBlock.style.right = `${posRight}px`;
  messageBlock.style.top = `${posTop}px`;

  const messageTitle = document.createElement('h1');
  messageTitle.className = 'title';
  messageTitle.innerHTML = title;
  messageBlock.append(messageTitle);

  const messageDescr = document.createElement('p');
  messageDescr.innerHTML = description;
  messageBlock.append(messageDescr);

  document.body.append(messageBlock);

  setTimeout(() => messageBlock.remove(), 2000);
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
