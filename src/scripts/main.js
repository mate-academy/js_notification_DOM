'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');

  messageBlock.classList.add('notification', type);

  const titleBlock = document.createElement('h2');
  const parBlock = document.createElement('p');

  titleBlock.classList.add('title');

  titleBlock.textContent = title;
  parBlock.textContent = description;

  messageBlock.appendChild(titleBlock);
  messageBlock.appendChild(parBlock);

  messageBlock.style.position = 'absolute';
  messageBlock.style.top = `${posTop}px`;
  messageBlock.style.right = `${posRight}px`;

  document.body.appendChild(messageBlock);

  setTimeout(() => {
    messageBlock.style.display = 'none';
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
