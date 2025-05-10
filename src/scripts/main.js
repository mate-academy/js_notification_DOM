'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const heading = document.createElement('h2');
  const message = document.createElement('p');

  heading.classList.add('title');
  heading.textContent = title;

  message.textContent = description;

  block.classList.add('notification', type);
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  block.append(heading, message);

  document.body.append(block);

  setTimeout(() => (block.style.display = 'none'), 2000);
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
