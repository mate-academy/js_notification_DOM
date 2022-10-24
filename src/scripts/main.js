'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageConteiner = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  document.body.append(messageConteiner);
  messageConteiner.append(messageTitle);
  messageConteiner.append(messageDescription);
  messageConteiner.classList.add('notification', type);
  messageConteiner.style.top = posTop + 'px';
  messageConteiner.style.right = posRight + 'px';
  messageTitle.classList.add('title');
  messageTitle.textContent = title;
  messageDescription.textContent = description;

  setTimeout(() => messageConteiner.remove(), 2000);
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
