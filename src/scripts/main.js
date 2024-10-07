'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  message.className = `notification ${type}`;
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  messageTitle.className = 'title';
  messageTitle.textContent = title;
  messageText.textContent = description;

  message.appendChild(messageTitle);

  message.appendChild(messageText);

  document.body.appendChild(message);

  setTimeout(() => {
    message.style.visibility = 'hidden';
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
