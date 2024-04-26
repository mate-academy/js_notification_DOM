'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;
  message.style.cssText = `top: ${posTop}px; right: ${posRight}px`;

  const messageTitle = document.createElement('h2');

  messageTitle.classList.add('title');
  messageTitle.textContent = title;

  const messageDescription = document.createElement('p');

  messageDescription.textContent = description;
  message.appendChild(messageTitle);
  message.appendChild(messageDescription);

  document.body.appendChild(message);

  setTimeout(() => {
    document.body.removeChild(message);
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
