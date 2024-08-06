'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification', type);

  const blockTitle = document.createElement('h2');

  blockTitle.classList.add('title');
  blockTitle.textContent = title;
  block.appendChild(blockTitle);

  const text = document.createElement('p');

  text.textContent = description;
  block.appendChild(text);

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  const body = document.querySelector('body');

  body.appendChild(block);

  setTimeout(() => {
    block.style.visibility = 'hidden';
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
