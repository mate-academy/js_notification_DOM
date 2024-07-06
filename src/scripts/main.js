'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const messageBlock = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  messageBlock.classList.add('notification', type);
  messageBlock.style.top = `${posTop}px`;
  messageBlock.style.right = `${posRight}px`;

  messageTitle.classList.add('title');
  messageTitle.textContent = title;

  messageDescription.textContent = description;

  messageBlock.append(messageTitle, messageDescription);
  document.body.append(messageBlock);

  setTimeout(() => (messageBlock.style.visibility = 'hidden'), 2000);
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
