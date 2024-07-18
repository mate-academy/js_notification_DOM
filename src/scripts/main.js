'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const blockDesc = document.createElement('p');

  block.className = `notification + ${type}`;
  block.append(blockTitle);
  block.append(blockDesc);

  block.style.position = 'absolute';
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  blockTitle.className = 'title';
  blockTitle.textContent = title;
  blockDesc.textContent = description;

  body.appendChild(block);

  setTimeout(() => {
    block.style.display = 'none';
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
