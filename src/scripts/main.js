'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescriprion = document.createElement('p');

  message.className = 'notification ' + type;
  messageTitle.className = 'title';
  messageDescriprion.innerText = description;
  messageTitle.innerText = title;
  message.append(messageTitle);
  message.append(messageDescriprion);
  document.querySelector('body').append(message);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  setTimeout(() => message.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

setTimeout(() => pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error'), 2000);

setTimeout(() => pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning'), 4000);
