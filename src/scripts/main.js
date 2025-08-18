'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageElement = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  messageElement.classList.add('notification', `${type}`);
  titleElement.classList.add('title');

  titleElement.textContent = title;
  descriptionElement.textContent = description;

  messageElement.appendChild(titleElement);
  messageElement.appendChild(descriptionElement);

  messageElement.style.top = `${posTop}px`;
  messageElement.style.right = `${posRight}px`;

  document.body.appendChild(messageElement);

  setTimeout(() => {
    messageElement.style.visibility = 'hidden';
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
