'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newMessage = document.createElement('div');

  newMessage.classList.add('notification', type);
  newMessage.style.top = `${posTop}px`;
  newMessage.style.right = `${posRight}px`;

  const messageTitle = document.createElement('h2');

  messageTitle.classList.add('title');
  messageTitle.textContent = title;

  const messageDescription = document.createElement('p');

  messageDescription.textContent = `${description}`;

  newMessage.appendChild(messageTitle);
  newMessage.appendChild(messageDescription);
  document.body.appendChild(newMessage);

  setTimeout(() => newMessage.remove(), 2000);
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
