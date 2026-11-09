'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  messageBlock.setAttribute('class', `notification ${type}`);
  messageTitle.setAttribute('class', 'title');

  messageTitle.textContent = title;
  messageText.textContent = description;

  messageBlock.appendChild(messageTitle);
  messageBlock.appendChild(messageText);
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
