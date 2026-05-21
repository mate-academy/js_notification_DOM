'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const createdBlock = document.createElement('div');

  createdBlock.classList.add('notification', type);

  const blockTitle = document.createElement('h2');

  blockTitle.classList.add('title');
  blockTitle.textContent = title;

  const blockP = document.createElement('p');

  blockP.textContent = description;

  createdBlock.append(blockTitle, blockP);
  document.body.append(createdBlock);

  createdBlock.style.top = `${posTop}px`;
  createdBlock.style.right = `${posRight}px`;

  setTimeout(() => {
    createdBlock.style.display = 'none';
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
