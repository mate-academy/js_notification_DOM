'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBlock = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const blockText = document.createElement('p');

  document.body.append(messageBlock);
  messageBlock.classList.add('notification', type);
  messageBlock.append(blockTitle, blockText);
  messageBlock.style.top = `${posTop}px`;
  messageBlock.style.right = `${posRight}px`;
  blockTitle.classList.add('title');
  blockTitle.textContent = title;
  blockText.textContent = description;

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
