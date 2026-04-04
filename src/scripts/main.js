'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const blockDescription = document.createElement('p');

  if (type === 'success' || type === 'error' || type === 'warning') {
    block.classList.add('notification', type);
  }

  if (typeof posTop === 'number') {
    block.style.top = `${posTop}px`;
  }

  if (typeof posRight === 'number') {
    block.style.right = `${posRight}px`;
  }

  blockTitle.className = 'title';
  blockTitle.textContent = title;
  block.appendChild(blockTitle);

  blockDescription.textContent = description;
  block.appendChild(blockDescription);
  document.body.appendChild(block);

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
