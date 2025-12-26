'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const body = document.querySelector('body');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  message.append(messageTitle, messageDescription);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  messageTitle.classList.add('title');
  messageTitle.textContent = title;
  messageDescription.classList.add('description');
  messageDescription.textContent = description;

  body.append(message);
  message.classList.add('notification', type);

  setTimeout(() => {
    message.style.display = 'none';
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
