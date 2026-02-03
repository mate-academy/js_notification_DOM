'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const block = document.createElement('div');

  block.classList.add('notification', type);

  block.style.position = 'absolute';
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');

  titleElement.classList.add('title');
  titleElement.textContent = title;

  const textElement = document.createElement('p');

  textElement.textContent = description;

  block.appendChild(titleElement);
  block.appendChild(textElement);

  document.body.appendChild(block);

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
