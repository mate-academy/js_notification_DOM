'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  block.className = `notification ${type}`;
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  messageDescription.textContent = description;

  block.append(messageTitle);
  block.append(messageDescription);

  document.body.append(block);

  setTimeout(() => (block.style.visibility = 'hidden'), 2000);
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
