'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newBlock = document.createElement('div');

  newBlock.classList.add('notification', type);
  newBlock.style.top = `${posTop}px`;
  newBlock.style.right = `${posRight}px`;

  const blockTitle = document.createElement('h2');

  blockTitle.classList.add('title');
  blockTitle.textContent = title;
  newBlock.append(blockTitle);

  const blockDescription = document.createElement('p');

  blockDescription.textContent = description;
  newBlock.append(blockDescription);

  document.body.append(newBlock);

  setTimeout(() => {
    newBlock.remove();
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
