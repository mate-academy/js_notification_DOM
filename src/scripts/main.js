'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  document.body.append(message);

  message.classList.add('notification', type);

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.textContent = title;
  message.append(messageTitle);

  const messageText = document.createElement('p');

  messageText.textContent = description;
  message.append(messageText);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  setTimeout(() => {
    message.hidden = true;
  }, 1900);
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
