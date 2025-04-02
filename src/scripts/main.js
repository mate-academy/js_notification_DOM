'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification', type);

  const titleMess = document.createElement('h2');

  titleMess.classList.add('title');

  const message = document.createElement('p');

  message.classList.add('message');

  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  titleMess.textContent = title;
  message.textContent = description;

  block.appendChild(titleMess);
  block.appendChild(message);
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
