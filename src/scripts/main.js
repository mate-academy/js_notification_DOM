'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageElement = document.createElement('div');

  messageElement.className = `notification ${type}`;
  messageElement.style.cssText = `top: ${posTop}px; right: ${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  messageElement.appendChild(titleElement);
  messageElement.appendChild(descriptionElement);

  document.body.appendChild(messageElement);

  setTimeout(() => {
    document.body.removeChild(messageElement);
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
