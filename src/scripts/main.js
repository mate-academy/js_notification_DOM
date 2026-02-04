'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageInfo = document.createElement('p');

  messageBlock.classList.add('notification', type);
  messageTitle.classList.add('title');

  messageTitle.innerText = title;
  messageInfo.innerText = description;

  messageBlock.style.position = 'absolute';
  messageBlock.style.top = `${posTop}px`;
  messageBlock.style.right = `${posRight}px`;

  messageBlock.append(messageTitle, messageInfo);
  document.body.append(messageBlock);

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
