'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const messageContainer = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  messageContainer.classList.add('notification', type);
  messageTitle.classList.add('title');

  messageTitle.textContent = title;
  messageText.textContent = description;

  messageContainer.style.top = `${posTop}px`;
  messageContainer.style.right = `${posRight}px`;

  messageContainer.append(messageTitle, messageText);
  body.append(messageContainer);

  setTimeout(() => messageContainer.remove(), 2000);
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
