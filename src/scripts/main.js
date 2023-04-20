'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;
  const message = document.createElement('div');

  message.classList.add('notification');
  message.classList.add(type);

  const messageTittle = document.createElement('h1');

  messageTittle.classList.add('title');
  messageTittle.innerText = title;

  const messageContent = document.createElement('p');

  messageContent.innerText = description;
  message.style.right = `${posRight}px`;
  message.style.top = `${posTop}px`;

  message.appendChild(messageTittle);
  message.appendChild(messageContent);
  body.appendChild(message);

  setTimeout(() => {
    body.removeChild(message);
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
