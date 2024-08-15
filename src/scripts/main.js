'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const container = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const message = document.createElement('p');

  container.classList.add('notification', type);
  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;

  messageTitle.classList.add('title');
  messageTitle.textContent = title;
  message.textContent = description;

  container.append(messageTitle, message);

  body.append(container);

  setTimeout(() => (container.style.visibility = 'hidden'), 2000);
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
