'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', `${type}`);

  const messageTitle = document.createElement('h2');

  messageTitle.classList.add('title');
  messageTitle.textContent = `${title}`;
  message.appendChild(messageTitle);

  const messageDescription = document.createElement('p');

  messageDescription.textContent = `${description}`;
  message.appendChild(messageDescription);

  document.body.appendChild(message);
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  setTimeout(() => {
    message.remove();
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
