'use strict';

const root = document.getElementById('root');

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const newBlock = document.createElement('div');

  newBlock.classList.add('notification', type);
  newBlock.style.position = 'absolute';
  newBlock.style.top = `${posTop}px`;
  newBlock.style.right = `${posRight}px`;

  const newTitle = document.createElement('h2');

  newTitle.classList.add('title');
  newTitle.textContent = title;

  const newText = document.createElement('p');

  newText.textContent = description;

  newBlock.appendChild(newTitle);
  newBlock.appendChild(newText);

  root.appendChild(newBlock);
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
